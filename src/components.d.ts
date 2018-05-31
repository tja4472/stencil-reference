/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';
import '@stencil/state-tunnel';

import {
  MatchResults,
} from '@stencil/router';

declare global {

  namespace StencilComponents {
    interface AppHome {

    }
  }

  interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-home': JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppProfile {
      'match': MatchResults;
    }
  }

  interface HTMLAppProfileElement extends StencilComponents.AppProfile, HTMLStencilElement {}

  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-profile': JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      'match'?: MatchResults;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyApp {

    }
  }

  interface HTMLMyAppElement extends StencilComponents.MyApp, HTMLStencilElement {}

  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-app': JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjaexComment {

    }
  }

  interface HTMLTjaexCommentElement extends StencilComponents.TjaexComment, HTMLStencilElement {}

  var HTMLTjaexCommentElement: {
    prototype: HTMLTjaexCommentElement;
    new (): HTMLTjaexCommentElement;
  };
  interface HTMLElementTagNameMap {
    'tjaex-comment': HTMLTjaexCommentElement;
  }
  interface ElementTagNameMap {
    'tjaex-comment': HTMLTjaexCommentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjaex-comment': JSXElements.TjaexCommentAttributes;
    }
  }
  namespace JSXElements {
    export interface TjaexCommentAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjaexConditionalIf {
      'name': string;
    }
  }

  interface HTMLTjaexConditionalIfElement extends StencilComponents.TjaexConditionalIf, HTMLStencilElement {}

  var HTMLTjaexConditionalIfElement: {
    prototype: HTMLTjaexConditionalIfElement;
    new (): HTMLTjaexConditionalIfElement;
  };
  interface HTMLElementTagNameMap {
    'tjaex-conditional-if': HTMLTjaexConditionalIfElement;
  }
  interface ElementTagNameMap {
    'tjaex-conditional-if': HTMLTjaexConditionalIfElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjaex-conditional-if': JSXElements.TjaexConditionalIfAttributes;
    }
  }
  namespace JSXElements {
    export interface TjaexConditionalIfAttributes extends HTMLAttributes {
      'name'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjaexConditionalTernary {
      'name': string;
    }
  }

  interface HTMLTjaexConditionalTernaryElement extends StencilComponents.TjaexConditionalTernary, HTMLStencilElement {}

  var HTMLTjaexConditionalTernaryElement: {
    prototype: HTMLTjaexConditionalTernaryElement;
    new (): HTMLTjaexConditionalTernaryElement;
  };
  interface HTMLElementTagNameMap {
    'tjaex-conditional-ternary': HTMLTjaexConditionalTernaryElement;
  }
  interface ElementTagNameMap {
    'tjaex-conditional-ternary': HTMLTjaexConditionalTernaryElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjaex-conditional-ternary': JSXElements.TjaexConditionalTernaryAttributes;
    }
  }
  namespace JSXElements {
    export interface TjaexConditionalTernaryAttributes extends HTMLAttributes {
      'name'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjaexCustomDomEvent {

    }
  }

  interface HTMLTjaexCustomDomEventElement extends StencilComponents.TjaexCustomDomEvent, HTMLStencilElement {}

  var HTMLTjaexCustomDomEventElement: {
    prototype: HTMLTjaexCustomDomEventElement;
    new (): HTMLTjaexCustomDomEventElement;
  };
  interface HTMLElementTagNameMap {
    'tjaex-custom-dom-event': HTMLTjaexCustomDomEventElement;
  }
  interface ElementTagNameMap {
    'tjaex-custom-dom-event': HTMLTjaexCustomDomEventElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjaex-custom-dom-event': JSXElements.TjaexCustomDomEventAttributes;
    }
  }
  namespace JSXElements {
    export interface TjaexCustomDomEventAttributes extends HTMLAttributes {
      'onToggle'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjaexDataBinding {

    }
  }

  interface HTMLTjaexDataBindingElement extends StencilComponents.TjaexDataBinding, HTMLStencilElement {}

  var HTMLTjaexDataBindingElement: {
    prototype: HTMLTjaexDataBindingElement;
    new (): HTMLTjaexDataBindingElement;
  };
  interface HTMLElementTagNameMap {
    'tjaex-data-binding': HTMLTjaexDataBindingElement;
  }
  interface ElementTagNameMap {
    'tjaex-data-binding': HTMLTjaexDataBindingElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjaex-data-binding': JSXElements.TjaexDataBindingAttributes;
    }
  }
  namespace JSXElements {
    export interface TjaexDataBindingAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjaexLoopMap {

    }
  }

  interface HTMLTjaexLoopMapElement extends StencilComponents.TjaexLoopMap, HTMLStencilElement {}

  var HTMLTjaexLoopMapElement: {
    prototype: HTMLTjaexLoopMapElement;
    new (): HTMLTjaexLoopMapElement;
  };
  interface HTMLElementTagNameMap {
    'tjaex-loop-map': HTMLTjaexLoopMapElement;
  }
  interface ElementTagNameMap {
    'tjaex-loop-map': HTMLTjaexLoopMapElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjaex-loop-map': JSXElements.TjaexLoopMapAttributes;
    }
  }
  namespace JSXElements {
    export interface TjaexLoopMapAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjaexMain {

    }
  }

  interface HTMLTjaexMainElement extends StencilComponents.TjaexMain, HTMLStencilElement {}

  var HTMLTjaexMainElement: {
    prototype: HTMLTjaexMainElement;
    new (): HTMLTjaexMainElement;
  };
  interface HTMLElementTagNameMap {
    'tjaex-main': HTMLTjaexMainElement;
  }
  interface ElementTagNameMap {
    'tjaex-main': HTMLTjaexMainElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjaex-main': JSXElements.TjaexMainAttributes;
    }
  }
  namespace JSXElements {
    export interface TjaexMainAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjaexPropDecorator {
      'favoriteNumber': number;
      'isSelected': string;
    }
  }

  interface HTMLTjaexPropDecoratorElement extends StencilComponents.TjaexPropDecorator, HTMLStencilElement {}

  var HTMLTjaexPropDecoratorElement: {
    prototype: HTMLTjaexPropDecoratorElement;
    new (): HTMLTjaexPropDecoratorElement;
  };
  interface HTMLElementTagNameMap {
    'tjaex-prop-decorator': HTMLTjaexPropDecoratorElement;
  }
  interface ElementTagNameMap {
    'tjaex-prop-decorator': HTMLTjaexPropDecoratorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjaex-prop-decorator': JSXElements.TjaexPropDecoratorAttributes;
    }
  }
  namespace JSXElements {
    export interface TjaexPropDecoratorAttributes extends HTMLAttributes {
      'favoriteNumber'?: number;
      'isSelected'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjaexRenderArray {

    }
  }

  interface HTMLTjaexRenderArrayElement extends StencilComponents.TjaexRenderArray, HTMLStencilElement {}

  var HTMLTjaexRenderArrayElement: {
    prototype: HTMLTjaexRenderArrayElement;
    new (): HTMLTjaexRenderArrayElement;
  };
  interface HTMLElementTagNameMap {
    'tjaex-render-array': HTMLTjaexRenderArrayElement;
  }
  interface ElementTagNameMap {
    'tjaex-render-array': HTMLTjaexRenderArrayElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjaex-render-array': JSXElements.TjaexRenderArrayAttributes;
    }
  }
  namespace JSXElements {
    export interface TjaexRenderArrayAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjaexSlotNamed {

    }
  }

  interface HTMLTjaexSlotNamedElement extends StencilComponents.TjaexSlotNamed, HTMLStencilElement {}

  var HTMLTjaexSlotNamedElement: {
    prototype: HTMLTjaexSlotNamedElement;
    new (): HTMLTjaexSlotNamedElement;
  };
  interface HTMLElementTagNameMap {
    'tjaex-slot-named': HTMLTjaexSlotNamedElement;
  }
  interface ElementTagNameMap {
    'tjaex-slot-named': HTMLTjaexSlotNamedElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjaex-slot-named': JSXElements.TjaexSlotNamedAttributes;
    }
  }
  namespace JSXElements {
    export interface TjaexSlotNamedAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjaexSlot {

    }
  }

  interface HTMLTjaexSlotElement extends StencilComponents.TjaexSlot, HTMLStencilElement {}

  var HTMLTjaexSlotElement: {
    prototype: HTMLTjaexSlotElement;
    new (): HTMLTjaexSlotElement;
  };
  interface HTMLElementTagNameMap {
    'tjaex-slot': HTMLTjaexSlotElement;
  }
  interface ElementTagNameMap {
    'tjaex-slot': HTMLTjaexSlotElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjaex-slot': JSXElements.TjaexSlotAttributes;
    }
  }
  namespace JSXElements {
    export interface TjaexSlotAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjalfsBoilingVerdict {
      'celsius': number;
    }
  }

  interface HTMLTjalfsBoilingVerdictElement extends StencilComponents.TjalfsBoilingVerdict, HTMLStencilElement {}

  var HTMLTjalfsBoilingVerdictElement: {
    prototype: HTMLTjalfsBoilingVerdictElement;
    new (): HTMLTjalfsBoilingVerdictElement;
  };
  interface HTMLElementTagNameMap {
    'tjalfs-boiling-verdict': HTMLTjalfsBoilingVerdictElement;
  }
  interface ElementTagNameMap {
    'tjalfs-boiling-verdict': HTMLTjalfsBoilingVerdictElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjalfs-boiling-verdict': JSXElements.TjalfsBoilingVerdictAttributes;
    }
  }
  namespace JSXElements {
    export interface TjalfsBoilingVerdictAttributes extends HTMLAttributes {
      'celsius'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjalfsCalculator {

    }
  }

  interface HTMLTjalfsCalculatorElement extends StencilComponents.TjalfsCalculator, HTMLStencilElement {}

  var HTMLTjalfsCalculatorElement: {
    prototype: HTMLTjalfsCalculatorElement;
    new (): HTMLTjalfsCalculatorElement;
  };
  interface HTMLElementTagNameMap {
    'tjalfs-calculator': HTMLTjalfsCalculatorElement;
  }
  interface ElementTagNameMap {
    'tjalfs-calculator': HTMLTjalfsCalculatorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjalfs-calculator': JSXElements.TjalfsCalculatorAttributes;
    }
  }
  namespace JSXElements {
    export interface TjalfsCalculatorAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjalfsTemperatureInput {
      'scale': string;
      'temperature': string;
    }
  }

  interface HTMLTjalfsTemperatureInputElement extends StencilComponents.TjalfsTemperatureInput, HTMLStencilElement {}

  var HTMLTjalfsTemperatureInputElement: {
    prototype: HTMLTjalfsTemperatureInputElement;
    new (): HTMLTjalfsTemperatureInputElement;
  };
  interface HTMLElementTagNameMap {
    'tjalfs-temperature-input': HTMLTjalfsTemperatureInputElement;
  }
  interface ElementTagNameMap {
    'tjalfs-temperature-input': HTMLTjalfsTemperatureInputElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjalfs-temperature-input': JSXElements.TjalfsTemperatureInputAttributes;
    }
  }
  namespace JSXElements {
    export interface TjalfsTemperatureInputAttributes extends HTMLAttributes {
      'onTemperatureChange'?: (event: CustomEvent) => void;
      'scale'?: string;
      'temperature'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjatirFilterableProductTable {
      'products': any;
    }
  }

  interface HTMLTjatirFilterableProductTableElement extends StencilComponents.TjatirFilterableProductTable, HTMLStencilElement {}

  var HTMLTjatirFilterableProductTableElement: {
    prototype: HTMLTjatirFilterableProductTableElement;
    new (): HTMLTjatirFilterableProductTableElement;
  };
  interface HTMLElementTagNameMap {
    'tjatir-filterable-product-table': HTMLTjatirFilterableProductTableElement;
  }
  interface ElementTagNameMap {
    'tjatir-filterable-product-table': HTMLTjatirFilterableProductTableElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjatir-filterable-product-table': JSXElements.TjatirFilterableProductTableAttributes;
    }
  }
  namespace JSXElements {
    export interface TjatirFilterableProductTableAttributes extends HTMLAttributes {
      'products'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjatirProductCategoryRow {
      'category': string;
    }
  }

  interface HTMLTjatirProductCategoryRowElement extends StencilComponents.TjatirProductCategoryRow, HTMLStencilElement {}

  var HTMLTjatirProductCategoryRowElement: {
    prototype: HTMLTjatirProductCategoryRowElement;
    new (): HTMLTjatirProductCategoryRowElement;
  };
  interface HTMLElementTagNameMap {
    'tjatir-product-category-row': HTMLTjatirProductCategoryRowElement;
  }
  interface ElementTagNameMap {
    'tjatir-product-category-row': HTMLTjatirProductCategoryRowElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjatir-product-category-row': JSXElements.TjatirProductCategoryRowAttributes;
    }
  }
  namespace JSXElements {
    export interface TjatirProductCategoryRowAttributes extends HTMLAttributes {
      'category'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjatirProductRow {
      'product': any;
    }
  }

  interface HTMLTjatirProductRowElement extends StencilComponents.TjatirProductRow, HTMLStencilElement {}

  var HTMLTjatirProductRowElement: {
    prototype: HTMLTjatirProductRowElement;
    new (): HTMLTjatirProductRowElement;
  };
  interface HTMLElementTagNameMap {
    'tjatir-product-row': HTMLTjatirProductRowElement;
  }
  interface ElementTagNameMap {
    'tjatir-product-row': HTMLTjatirProductRowElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjatir-product-row': JSXElements.TjatirProductRowAttributes;
    }
  }
  namespace JSXElements {
    export interface TjatirProductRowAttributes extends HTMLAttributes {
      'product'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjatirProductTable {
      'filterText': string;
      'inStockOnly': boolean;
      'products': any;
    }
  }

  interface HTMLTjatirProductTableElement extends StencilComponents.TjatirProductTable, HTMLStencilElement {}

  var HTMLTjatirProductTableElement: {
    prototype: HTMLTjatirProductTableElement;
    new (): HTMLTjatirProductTableElement;
  };
  interface HTMLElementTagNameMap {
    'tjatir-product-table': HTMLTjatirProductTableElement;
  }
  interface ElementTagNameMap {
    'tjatir-product-table': HTMLTjatirProductTableElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjatir-product-table': JSXElements.TjatirProductTableAttributes;
    }
  }
  namespace JSXElements {
    export interface TjatirProductTableAttributes extends HTMLAttributes {
      'filterText'?: string;
      'inStockOnly'?: boolean;
      'products'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjatirSearchBar {
      'filterText': string;
      'inStockOnly': boolean;
    }
  }

  interface HTMLTjatirSearchBarElement extends StencilComponents.TjatirSearchBar, HTMLStencilElement {}

  var HTMLTjatirSearchBarElement: {
    prototype: HTMLTjatirSearchBarElement;
    new (): HTMLTjatirSearchBarElement;
  };
  interface HTMLElementTagNameMap {
    'tjatir-search-bar': HTMLTjatirSearchBarElement;
  }
  interface ElementTagNameMap {
    'tjatir-search-bar': HTMLTjatirSearchBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjatir-search-bar': JSXElements.TjatirSearchBarAttributes;
    }
  }
  namespace JSXElements {
    export interface TjatirSearchBarAttributes extends HTMLAttributes {
      'filterText'?: string;
      'inStockOnly'?: boolean;
      'onFilterTextChange'?: (event: CustomEvent) => void;
      'onInStockChange'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface TjatirThinkingInReact {

    }
  }

  interface HTMLTjatirThinkingInReactElement extends StencilComponents.TjatirThinkingInReact, HTMLStencilElement {}

  var HTMLTjatirThinkingInReactElement: {
    prototype: HTMLTjatirThinkingInReactElement;
    new (): HTMLTjatirThinkingInReactElement;
  };
  interface HTMLElementTagNameMap {
    'tjatir-thinking-in-react': HTMLTjatirThinkingInReactElement;
  }
  interface ElementTagNameMap {
    'tjatir-thinking-in-react': HTMLTjatirThinkingInReactElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tjatir-thinking-in-react': JSXElements.TjatirThinkingInReactAttributes;
    }
  }
  namespace JSXElements {
    export interface TjatirThinkingInReactAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
