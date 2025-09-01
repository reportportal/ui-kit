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

import { Component, useEffect, useState } from 'react';

export interface WithAsyncLoadingProps<T> {
  fetch: () => Promise<any>;
  getURI: () => string;
  getRequestParams: () => Record<string, string | number>;
  makeOptions: <K>(padyload: K) => T[];
  filterOption: (value: string) => T[];
  minLength: number;
}

export const WithAsyncLoading = <T,>(AutocompleteComponent: T) => {
  const WrapperAutoComplete = (props: WithAsyncLoadingProps<T>) => {
    const {
      getURI = () => '',
      getRequestParams = () => ({}),
      makeOptions = (values) => values,
      filterOption = () => true,
      minLength = 1,
    } = props;
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    let cancelToken: (() => void) | null = null;
    let cancelDebounce: (() => void) | null = null;

    const debouncedFetch = debounce((inputValue) => {
      if (cancelToken) {
        cancelToken?.();
      }

      const value = (inputValue || '').trim();
      const uri = getURI(value);
      const requestParams = getRequestParams(value);

      fetch(uri, {
        abort: (cancelToken) => {
          cancelToken = cancelToken;
        },
        ...requestParams,
      })
        .then((response) => {
          cancelToken = null;
          setOptions(makeOptions(response).filter(filterOption));
          setLoading(false);
        })
        .catch((error) => {
          if (error.message !== ERROR_CANCELED) {
            setLoading(false);
            setOptions([]);
          }
          cancelToken = null;
        });
    }, 200);

    const loadOptions = (inputValue) => {
      setLoading(true);
      cancelDebounce = debouncedFetch(inputValue);
    };

    const handleStateChange = (changes, { isOpen, inputValue }) => {
      if (!isOpen) return;

      if (
        ('isOpen' in changes && !minLength) ||
        ('inputValue' in changes && (inputValue || '').trim().length >= minLength)
      ) {
        loadOptions(inputValue || '');
      }
    };

    useEffect(() => {
      return () => {
        cancelToken?.();
        cancelDebounce?.();
      };
    });

    return (
      <AutocompleteComponent
        options={options}
        loading={loading}
        onStateChange={handleStateChange}
        async
        {...props}
      />
    );
  };

  return WrapperAutoComplete;
};
