/*
 * Copyright 2022 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component } from 'react';
import { debounce, fetch, ERROR_CANCELED } from 'common/utils';

export interface WithAsyncLoadingProps<T> {
  getURI: () => string;
  getRequestParams: () => Record<string, string | number>;
  makeOptions: (values: T) => T[];
  filterOption: (value: string) => T[];
  minLength: number;
}

export const WithAsyncLoading = <T,>(AutocompleteComponent: T) =>
  class WrappedAutocomplete extends Component<WithAsyncLoadingProps<T>> {
    getURI: cancelDebounce = null;
    constructor(props: WithAsyncLoadingProps<T>) {
      super
      this = { ...props };
    }

    static propTypes = {
      getURI: PropTypes.func,
      getRequestParams: PropTypes.func,
      makeOptions: PropTypes.func,
      filterOption: PropTypes.func,
      minLength: PropTypes.number,
    };

    static defaultProps = {
      getURI: () => '',
      getRequestParams: () => ({}),
      makeOptions: (values) => values,
      filterOption: () => true,
      minLength: 1,
    };

    state = {
      options: [],
      loading: false,
    };

    cancelToken: (() => void) | null = null;

    componentWillUnmount() {
      this.cancelToken?.();
      this.cancelDebounce?.();
    }

    debouncedFetch = debounce((inputValue) => {
      const { getURI, getRequestParams, makeOptions, filterOption } = this.props;

      if (this.cancelToken) {
        this.cancelToken?.();
      }

      const value = (inputValue || '').trim();
      const uri = getURI(value);
      const requestParams = getRequestParams(value);

      fetch(uri, {
        abort: (cancelToken) => {
          this.cancelToken = cancelToken;
        },
        ...requestParams,
      })
        .then((response) => {
          this.cancelToken = null;
          this.setState({
            options: makeOptions(response).filter(filterOption),
            loading: false,
          });
        })
        .catch((error) => {
          if (error.message !== ERROR_CANCELED) {
            this.setState({
              options: [],
              loading: false,
            });
          }
          this.cancelToken = null;
        });
    }, 200);

    loadOptions = (inputValue) => {
      this.setState({ loading: true });
      this.cancelDebounce = this.debouncedFetch(inputValue);
    };

    handleStateChange = (changes, { isOpen, inputValue }) => {
      if (!isOpen) return;

      if (
        ('isOpen' in changes && !this.props.minLength) ||
        ('inputValue' in changes && (inputValue || '').trim().length >= this.props.minLength)
      ) {
        this.loadOptions(inputValue || '');
      }
    };

    render() {
      const { options, loading } = this.state;
      return (
        <AutocompleteComponent
          options={options}
          loading={loading}
          onStateChange={this.handleStateChange}
          async
          {...this.props}
        />
      );
    }
  };
