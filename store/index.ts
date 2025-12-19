/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
// REVOLT UI STORE - AUTO-GENERATED FILE - DO NOT EDIT MANUALLY

import * as React from "react"

export const Store: Record<string, Record<string, any>> = {
  "accordion-demo": {
    component: React.lazy(() =>
      import("../store/examples/accordion-demo").then(mod => ({ default: mod.default }))
    ),
  },
  "button-demo": {
    component: React.lazy(() =>
      import("../store/examples/button-demo").then(mod => ({ default: mod.default }))
    ),
  },
  "button-size-demo": {
    component: React.lazy(() =>
      import("../store/examples/button-size-demo").then(mod => ({ default: mod.default }))
    ),
  }
};
