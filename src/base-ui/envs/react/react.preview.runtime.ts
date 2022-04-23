import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect as BitReactAspect, ReactPreview } from '@teambit/react';
// uncomment the line below and install the theme if you want to use our theme or create your own and import it here
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

import { ReactAspect } from './react.aspect';

export class ReactPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [BitReactAspect];

  static async provider([react]: [ReactPreview]) {
    const reactPreviewMain = new ReactPreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    react.registerProvider([ThemeCompositions]);

    return reactPreviewMain;
  }
}

ReactAspect.addRuntime(ReactPreviewMain);
