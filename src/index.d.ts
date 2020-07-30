// Type definitions for brainly-style-guide
// Project: brainly-style-guide

/// <reference types="react" />

declare module "brainly-style-guide" {
  // -----------brainly-style-guide/components/action-list/ActionList--------------

  type DirectionType =
    | "to-right"
    | "centered"
    | "space-between"
    | "space-around"
    | "space-evenly";

  type AligmentType = "align-baseline" | "stretch";

  type ActionListPropsType = {
    children: React.ReactNode;
    toTop?: boolean | null | undefined;
    className?: string | null | undefined;
    noWrap?: boolean | null | undefined;
    direction?: DirectionType | null | undefined;
    align?: AligmentType | null | undefined;
  };

  export const ActionList: ({
    children,
    toTop,
    direction,
    align,
    noWrap,
    className,
    ...props
  }: ActionListPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/text/Text--------------

  type TextTypeType =
    | "span"
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "div"
    | "label"
    | "a";

  type TextSizeType =
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge";

  export type TextColorType =
    | "default"
    | "white"
    | "gray"
    | "gray-secondary"
    | "gray-secondary-light"
    | "mint-dark"
    | "peach-dark"
    | "mustard-dark"
    | "lavender-dark"
    | "blue-dark";

  type TextWeightType = "regular" | "bold";
  type TextTransformType = "uppercase" | "lowercase" | "capitalize";
  type TextAlignType = "to-left" | "to-center" | "to-right" | "justify";
  type TextWhiteSpaceType = "pre-wrap" | "pre-line";

  type TextPropsType = {
    children?: React.ReactNode | null | undefined;
    size?: TextSizeType;
    type?: TextTypeType;
    color?: TextColorType | null | undefined;
    weight?: TextWeightType;
    transform?: TextTransformType | null | undefined;
    align?: TextAlignType | null | undefined;
    noWrap?: boolean | null | undefined;
    asContainer?: boolean | null | undefined;
    full?: boolean | null | undefined;
    breakWords?: boolean | null | undefined;
    whiteSpace?: TextWhiteSpaceType;
    className?: string | null | undefined;
    title?: string;
    onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
  };

  export const Text: ({
    children,
    type,
    size,
    weight,
    color,
    transform,
    align,
    noWrap,
    asContainer,
    full,
    breakWords,
    whiteSpace,
    className,
    ...props
  }: TextPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/text/Link--------------

  type LinkColorType =
    | "black"
    | "white"
    | "gray"
    | "gray-secondary"
    | "gray-secondary-light"
    | "mint-dark"
    | "blue-dark";

  type LinkPropsType = {
    children?: React.ReactNode | null | undefined;
    href?: string | null | undefined;
    size?: TextSizeType;
    type?: TextTypeType;
    color?: LinkColorType | null | undefined;
    weight?: TextWeightType;
    transform?: TextTransformType | null | undefined;
    align?: TextAlignType | null | undefined;
    noWrap?: boolean | null | undefined;
    breakWords?: boolean | null | undefined;
    underlined?: boolean;
    unstyled?: boolean;
    emphasised?: boolean;
    disabled?: boolean;
    className?: string | null | undefined;
    onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
  };

  export const Link: (props: LinkPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/avatar/Avatar--------------

  type AvatarSizeType = "xs" | "s" | "m" | "l" | "xl" | "xxl";

  type AvatarPropsType = {
    size?: AvatarSizeType;
    border?: boolean;
    spaced?: boolean;
    imgSrc?: string;
    className?: string;
    title?: string;
    link?: string;
  };

  export const Avatar: ({
    size,
    border,
    spaced,
    imgSrc,
    className,
    link,
    title,
    ...props
  }: AvatarPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/text/Headline--------------

  type HeadlineTypeType = "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  type HeadlineSizeType =
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge";

  type HeadlineColorType =
    | "default"
    | "white"
    | "gray"
    | "gray-secondary"
    | "gray-secondary-light"
    | "mint-dark"
    | "peach-dark"
    | "lavender-dark"
    | "mustard-dark"
    | "blue-dark";

  type HeadlineTransformType = "uppercase" | "lowercase" | "capitalize";
  type HeadlineAlignType = "to-left" | "to-center" | "to-right" | "justify";

  type HeadlinePropsType = {
    children?: React.ReactNode;
    size?: HeadlineSizeType;
    type?: HeadlineTypeType;
    color?: HeadlineColorType | null | undefined;
    transform?: HeadlineTransformType | null | undefined;
    align?: HeadlineAlignType | null | undefined;
    className?: string | null | undefined;
    extraBold?: boolean | null | undefined;
  };

  export const Headline: ({
    children,
    type,
    size,
    extraBold,
    transform,
    align,
    color,
    className,
    ...props
  }: HeadlinePropsType) => JSX.Element;

  // -----------brainly-style-guide/components/flex/Flex--------------

  type FlexContainerType =
    | "a"
    | "article"
    | "aside"
    | "div"
    | "footer"
    | "form"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "header"
    | "input"
    | "li"
    | "main"
    | "nav"
    | "ol"
    | "p"
    | "pre"
    | "section"
    | "span"
    | "textarea"
    | "ul";

  type FlexDirectionType = "column" | "column-reverse" | "row" | "row-reverse";

  type FlexJustifyValuesType =
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";

  type FlexAlignmentValuesType =
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "stretch";

  type FlexMarginsType =
    | "xxs"
    | "xs"
    | "s"
    | "m"
    | "l"
    | "xl"
    | "xxl"
    | "xxxl"
    | "xxxxl";

  type FlexPropsType = {
    children: React.ReactNode;
    htmlTag?: FlexContainerType;
    className?: string;
    fullWidth?: boolean;
    fullHeight?: boolean;
    noShrink?: boolean;
    direction?: FlexDirectionType;
    justifyContent?: FlexJustifyValuesType;
    alignContent?: FlexAlignmentValuesType;
    alignItems?: FlexAlignmentValuesType;
    alignSelf?: FlexAlignmentValuesType;
    inlineFlex?: boolean;
    wrap?: boolean;
    wrapReverse?: boolean;
    margin?: FlexMarginsType;
    marginTop?: FlexMarginsType;
    marginRight?: FlexMarginsType;
    marginBottom?: FlexMarginsType;
    marginLeft?: FlexMarginsType;
    onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
    style?: Record<string, unknown>;
    role?: string;
  };

  export const Flex: (props: FlexPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/icons/Icon--------------

  type IconColorType =
    | "adaptive"
    | "blue"
    | "dark"
    | "gray"
    | "gray-light"
    | "gray-secondary"
    | "lavender"
    | "light"
    | "mint"
    | "mustard"
    | "navy-blue"
    | "peach";

  type IconTagType = "div" | "span";

  type IconTypeType =
    | "academic_cap"
    | "all_questions"
    | "answer"
    | "arrow_double_down"
    | "arrow_down"
    | "arrow_left"
    | "arrow_right"
    | "arrow_up"
    | "ask_parent_to_pay"
    | "attachment"
    | "bell_checked"
    | "bell_outlined"
    | "bold"
    | "bulleted_list"
    | "calendar"
    | "camera"
    | "check"
    | "close"
    | "comment"
    | "comment_outlined"
    | "counter"
    | "credit_card"
    | "crown_outlined"
    | "equation"
    | "excellent"
    | "exclamation_mark"
    | "facebook"
    | "friend_add"
    | "friend_remove"
    | "friend_pending"
    | "friend_checked"
    | "friends"
    | "heading"
    | "heart"
    | "heart_outlined"
    | "image"
    | "influence"
    | "instagram"
    | "italic"
    | "less"
    | "linkedin"
    | "lock_with_play"
    | "logout"
    | "medium"
    | "menu"
    | "messages"
    | "mic"
    | "money_transfer"
    | "add_more"
    | "notifications"
    | "numbered_list"
    | "open_in_new_tab"
    | "padlock"
    | "pencil"
    | "play"
    | "plus"
    | "points"
    | "profile"
    | "profile_view"
    | "question"
    | "recent_questions"
    | "reload"
    | "report_flag"
    | "report_flag_outlined"
    | "rotate"
    | "rotate_90"
    | "search"
    | "seen"
    | "settings"
    | "share"
    | "sms"
    | "star"
    | "star_half"
    | "star_half_outlined"
    | "star_outlined"
    | "subtitle"
    | "symbols"
    | "title"
    | "toughest_questions"
    | "trash"
    | "twitter"
    | "underlined"
    | "unseen"
    | "verified"
    | "warning"
    | "youtube"
    | "arrow_top_right"
    | "circle"
    | "crop"
    | "cyrillic"
    | "draw"
    | "drawing_mode"
    | "european"
    | "greek"
    | "highlight"
    | "line"
    | "more"
    | "pause"
    | "rectangle"
    | "sup_sub"
    | "triangle"
    | "pi"
    | "quote"
    | "spark";

  type IconSizeType =
    | 120
    | 118
    | 104
    | 102
    | 80
    | 78
    | 64
    | 62
    | 56
    | 54
    | 48
    | 46
    | 40
    | 38
    | 32
    | 30
    | 26
    | 24
    | 22
    | 20
    | 18
    | 16
    | 14
    | 10;

  type IconPropsType = {
    children?: React.ReactNode;
    className?: string | null | undefined;
    color?: IconColorType | null | undefined;
    size?: IconSizeType | null | undefined;
    type?: IconTypeType;
    onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
    tagType?: IconTagType;
  };

  export const Icon: ({
    color,
    size,
    type,
    children,
    tagType,
    className,
    ...props
  }: IconPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/form-elements/Checkbox--------------

  type CheckboxPropsType = {
    checked?: boolean;
    id?: string;
    className?: string;
    onChange: (evt: React.MouseEvent<HTMLElement>) => void;
  };

  type CheckboxStateType = {
    id: string;
  };
  export class Checkbox extends React.PureComponent<
    CheckboxPropsType,
    CheckboxStateType
  > {
    constructor(props: CheckboxPropsType);
    render(): JSX.Element;
  }

  // -----------brainly-style-guide/components/flash-messages/FlashMessage--------------

  type FlashMessageTypeType = "default" | "success" | "error" | "info";

  type FlashMessagePropsType = {
    text: string;
    type?: FlashMessageTypeType;
    className?: string;
  };

  export const FlashMessage: ({
    text,
    type,
    className,
    ...props
  }: FlashMessagePropsType) => JSX.Element;

  // -----------brainly-style-guide/components/buttons/Button--------------

  type ButtonSizeType = "l" | "m" | "s";

  enum TOGGLE_BUTTON_TYPE {
    SOLID_LIGHT = "solid-light",
    OUTLINE = "outline",
    TRANSPARENT = "transparent",
    TRANSPARENT_LIGHT = "transparent-light",
  }

  enum BUTTON_TYPE {
    SOLID_LIGHT = "solid-light",
    OUTLINE = "outline",
    TRANSPARENT = "transparent",
    TRANSPARENT_LIGHT = "transparent-light",
    SOLID = "solid",
    SOLID_INVERTED = "solid-inverted",
    SOLID_BLUE = "solid-blue",
    SOLID_MINT = "solid-mint",
    TRANSPARENT_PEACH = "transparent-peach",
    TRANSPARENT_MUSTARD = "transparent-mustard",
    TRANSPARENT_BLUE = "transparent-blue",
    TRANSPARENT_INVERTED = "transparent-inverted",
    FACEBOOK = "facebook",
  }

  enum BUTTON_TOGGLE {
    PEACH = "peach",
    MUSTARD = "mustard",
    BLUE = "blue",
  }

  type ValueOf<T> = T[keyof T];

  type ButtonColorType =
    | {
        type: ValueOf<BUTTON_TYPE>;
        toggle?: null;
      }
    | {
        type: ValueOf<TOGGLE_BUTTON_TYPE>;
        toggle?: ValueOf<BUTTON_TOGGLE> | null;
      }
    | {
        type: ValueOf<TOGGLE_BUTTON_TYPE> | "transparent-peach";
        toggle?: "peach" | null;
      }
    | {
        type: ValueOf<TOGGLE_BUTTON_TYPE> | "transparent-mustard";
        toggle?: "mustard" | null;
      }
    | {
        type: ValueOf<TOGGLE_BUTTON_TYPE> | "transparent-blue";
        toggle?: "blue" | null;
      };

  type ButtonIconType = {
    icon?: React.ReactNode;
    iconOnly?: boolean | null;
    reversedOrder?: boolean;
  };

  type ButtonPropsType = ButtonColorType &
    ButtonIconType & {
      children?: React.ReactNode;
      size?: ButtonSizeType;
      href?: string;
      disabled?: boolean;
      fullWidth?: boolean;
      className?: string;
      onClick?: (evt: React.SyntheticEvent<HTMLButtonElement>) => void;
    };

  export const Button: ({
    size,
    type,
    icon,
    iconOnly,
    reversedOrder,
    href,
    fullWidth,
    disabled,
    toggle,
    children,
    className,
    ...props
  }: ButtonPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/box/Box--------------

  export type BoxColorType =
    | "dark"
    | "light"
    | "blue"
    | "lavender"
    | "mint"
    | "mint-secondary"
    | "mint-secondary-light"
    | "mint-secondary-ultra-light"
    | "blue-secondary"
    | "blue-secondary-light"
    | "gray-secondary-lightest"
    | "gray-secondary-ultra-light"
    | "mustard-primary"
    | "peach"
    | "peach-secondary"
    | "peach-secondary-light";

  type BoxPaddingType = "xxs" | "xs" | "s" | "m" | "l" | "xl";

  type BoxPropsType = {
    /**
     * Children to be rendered inside of the Box
     * @example <Box>Text inside Box</Box>
     */
    children: React.ReactNode;
    /**
     * Additional class names
     */
    className?: string | null | undefined;
    /**
     * Box background color
     * @example <Box color="mint-secondary">Text on a mint background</Box>
     */
    color?: BoxColorType | null | undefined;
    /**
     * Box shadow
     * @example <Box shadow>Text inside box with shadow</Box>
     * @default false
     */
    shadow?: boolean;
    /**
     * Padding size. Defaults to 'm' size, pass null to set it to 0
     * @example <Box padding="l">Text inside Box with large padding</Box>
     */
    padding?: BoxPaddingType | null;
    noBorderRadius?: boolean;
    border?: boolean;
    borderColor?: BoxColorType | null | undefined;
  };

  export const Box: ({
    children,
    className,
    color,
    padding,
    border,
    borderColor,
    noBorderRadius,
    shadow,
    ...props
  }: BoxPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/overlay/Overlay--------------

  type OverlayPropsType = {
    children?: React.ReactNode;
    partial?: boolean;
    className?: string;
    color?: BoxColorType;
    onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
  };

  export const Overlay: ({
    partial,
    children,
    className,
    color,
    ...props
  }: OverlayPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/toplayer/TopLayer--------------

  type TopLayerSizeType = "small" | "medium" | "large";

  type TopLayerPropsType = {
    children: React.ReactNode;
    onClose?: (evt: React.MouseEvent<HTMLDivElement>) => void;
    onCloseButtonKeyDown?: (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => void;
    lead?: boolean;
    fill?: boolean;
    modal?: boolean;
    withBugbox?: boolean;
    smallSpaced?: boolean;
    splashScreen?: boolean;
    limitedWidth?: boolean;
    row?: boolean;
    size?: TopLayerSizeType;
    transparent?: boolean;
    noPadding?: boolean;
    className?: string;
  };

  export const TopLayer: (props: TopLayerPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/icon-as-button/IconAsButton--------------

  type IconAsButtonSizeType = "normal" | "small" | "xsmall" | "xxsmall";

  type IconAsButtonPropsType = {
    size?: IconAsButtonSizeType;
    color?: IconColorType;
    type?: IconTypeType | null | undefined;
    children?: React.ReactElement<HTMLElement> | null | undefined;
    border?: boolean;
    action?: boolean;
    transparent?: boolean;
    active?: boolean;
    href?: string;
    className?: string;
  };

  const IconAsButton: ({
    color,
    size,
    type,
    children,
    action,
    transparent,
    active,
    border,
    className,
    ...props
  }: IconAsButtonPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/separators/SeparatorVertical--------------

  type SeparatorSizeType = "normal" | "small" | "large" | "full";

  type SeparatorPropsType = {
    size?: SeparatorSizeType;
    white?: boolean;
    grayDark?: boolean;
    className?: string;
  };

  export const SeparatorVertical: ({
    size,
    white,
    grayDark,
    className,
    ...props
  }: SeparatorPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/math-symbols/MathSymbol--------------

  type MathSymbolTypeType =
    | "squere-root"
    | "nth-root"
    | "power"
    | "subscript"
    | "less-then-or-equal"
    | "greater-then-or-equal"
    | "inequality"
    | "division"
    | "pi"
    | "alpha"
    | "beta"
    | "line"
    | "limit"
    | "matrix"
    | "integral"
    | "equation-system";

  type MathSymbolSizeType = "small" | "medium" | "normal";

  type MathSymbolPropsType = {
    type: MathSymbolTypeType;
    size?: MathSymbolSizeType;
    color?: IconColorType;
    className?: string;
  };

  export const MathSymbol: ({
    type,
    size,
    color,
    className,
    ...props
  }: MathSymbolPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/form-elements/Input--------------

  type InputSizeType = "m" | "l";
  type InputColorType = "default" | "white";
  type InputType =
    | "button"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

  export type InputPropsType = {
    /**
     * Optional specification for input type
     * @example <Input type="email" placeholder="placeholder" />
     */
    type?: InputType | undefined;
    /**
     * Optional specification for input value, which can be string or number
     * @example <Input type="email" value={2} />
     */
    value?: string | number;
    /**
     * There are two sizes options for most of the form elements
     * @example <Input size="normal" placeholder="placeholder" />
     * @see size="normal" https://styleguide.brainly.com/latest/docs/interactive.html?size="normal"#input
     * @see size="large" https://styleguide.brainly.com/latest/docs/interactive.html?size="large"#input
     */
    size?: InputSizeType | null | undefined;
    /**
     * There are two color variants for form elements, default does not have to be specified
     * @example <Input color="white" placeholder="placeholder" />
     * @see color="default" https://styleguide.brainly.com/latest/docs/interactive.html?color="default"#input
     * @see color="white" https://styleguide.brainly.com/latest/docs/interactive.html?color="white"#input
     */
    color?: InputColorType | null | undefined;
    /**
     * Optional boolean to specified if it's valid
     * @example <Input valid placeholder="placeholder" />
     */
    valid?: boolean;
    /**
     * Optional boolean to specified if it's invalid
     * @example <Input invalid placeholder="placeholder" />
     */
    invalid?: boolean;
    /**
     * Optional boolean to specified if it's full width
     * @example <Input fullWidth placeholder="placeholder" />
     */
    fullWidth?: boolean;
    /**
     * Optional boolean to specified if it's with icon, used in search component
     * @example <Input withIcon placeholder="placeholder" />
     */
    withIcon?: boolean;
    /**
     * Optional ReactNode if there should be an error message displayed
     * @example <Input errorMessage="This is an error" />
     */
    errorMessage?: React.ReactNode | string;
    /**
     * Additional class names
     */
    className?: string;
    /**
     * Additional function to set ref for input
     */
    setInputRef?: (ref: HTMLElement | null | undefined) => void;
    placeholder?: string;
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  };

  export const Input: (props: InputPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/form-elements/Radio--------------

  type RadioSizeType = "xxs" | "s";

  type RadioPropsType = {
    checked?: boolean;
    name?: string;
    id?: string;
    size?: RadioSizeType | null | undefined;
    className?: string;
    onChange?: (evt: React.MouseEvent<HTMLElement>) => void;
  };

  export const Radio: (props: RadioPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/separators/SeparatorHorizontal--------------

  type SeparatorHorizontalTypeType = "normal" | "spaced" | "short-spaced";

  type SeparatorHorizontalPropsType = {
    type?: SeparatorHorizontalTypeType;
    white?: boolean;
    grayDark?: boolean;
    className?: string;
  };

  const SeparatorHorizontal: ({
    type,
    white,
    grayDark,
    className,
    ...props
  }: SeparatorHorizontalPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/logo/Logo--------------

  type LogoTypeType =
    | "brainly"
    | "brainly-mobile"
    | "eodev"
    | "eodev-mobile"
    | "nosdevoirs"
    | "nosdevoirs-mobile"
    | "znanija"
    | "znanija-mobile"
    | "znanija-plus"
    | "znanija-plus-inverse"
    | "znanija-plus-small"
    | "brainly-plus"
    | "brainly-plus-inverse"
    | "brainly-plus-small";

  type LogoPropsType = {
    type?: LogoTypeType;
    href?: string;
    className?: string;
    altTag?: string;
  };

  export const Logo: ({
    type,
    href,
    className,
    altTag,
    ...props
  }: LogoPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/spinner/Spinner--------------

  type SpinnerSizeType = "small" | "xsmall" | "xxsmall";

  type SpinnerPropsType = {
    light?: boolean;
    size?: SpinnerSizeType;
    className?: string;
  };

  export const Spinner: ({
    light,
    size,
    className,
    ...props
  }: SpinnerPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/labels/Label--------------

  export type LabelColorType =
    | "blue"
    | "mint"
    | "lavender"
    | "peach"
    | "mustard"
    | "gray"
    | "mono";

  type LabelType = "default" | "solid" | "transparent" | "transparent-color";

  type LabelPropsType = {
    /**
     * Specify type of label
     * @example <Label
     *           type="default"
     *           color="blue"
     *          >
     *            example label
     *          </Label>
     * @see type="default" https://styleguide.brainly.com/latest/docs/interactive.html?type="default"#labels
     * @see type="solid" https://styleguide.brainly.com/latest/docs/interactive.html?type="solid"#labels
     * @see type="transparent" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent"#labels
     * @see type="transparent-color" https://styleguide.brainly.com/latest/docs/interactive.html?type="transparent-color"#labels
     */
    type?: LabelType;
    /**
     * Specify color for label
     * @example <Label
     *           type="default"
     *           color="blue"
     *          >
     *            example label
     *          </Label>
     * @see color="blue" https://styleguide.brainly.com/latest/docs/interactive.html?color="blue"#labels
     * @see color="mint" https://styleguide.brainly.com/latest/docs/interactive.html?color="mint"#labels
     * @see color="lavender" https://styleguide.brainly.com/latest/docs/interactive.html?color="lavender"#labels
     * @see color="peach" https://styleguide.brainly.com/latest/docs/interactive.html?color="peach"#labels
     * @see color="mustard" https://styleguide.brainly.com/latest/docs/interactive.html?color="mustard"#labels
     * @see color="gray" https://styleguide.brainly.com/latest/docs/interactive.html?color="gray"#labels
     * @see color="mono" https://styleguide.brainly.com/latest/docs/interactive.html?color="mono"#labels
     */
    color: LabelColorType;
    /**
     * Icons types example, see more in SG interactive
     * @example <Label
     *           type="default"
     *           color="blue"
     *           iconType="heart"
     *          >
     *            example label
     *          </Label>
     * @see type="iconType" https://styleguide.brainly.com/latest/docs/interactive.html?iconType=heart#labels
     */
    iconType?: IconTypeType;
    /**
     * Callback, called by clicking on **close** button. If specified, button will be added automatically
     * @example <Label
     *           type="default"
     *           color="blue"
     *           iconType="heart"
     *           onClose={() => doSomething()}
     *          >
     *            example label
     *          </Label>
     */
    onClose?: (
      evt: React.MouseEvent<HTMLButtonElement>
    ) => unknown | null | undefined;
    /**
     * Children to be rendered inside Label
     * @example <Label
     *           type="default"
     *           color="blue"
     *          >
     *            example label
     *          </Label>
     */
    children: React.ReactNode;
    /**
     * Additional class names
     */
    className?: string;
  };

  export const Label: ({
    children,
    type,
    iconType,
    onClose,
    color,
    className,
    ...props
  }: LabelPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/counters/Counter--------------

  type CounterSizeType = "xs" | "xxs";

  type CounterPropsType = {
    /**
     * Children to be rendered inside Counter
     * @example <Counter type="basic">
     *            text
     *          </Counter>
     */
    children: React.ReactNode;
    /**
     * Specify type of the counter that you want to use, two types for now
     * @example <Counter type="basic">
     *            1
     *          </Counter>
     * @see type="basic" https://styleguide.brainly.com/latest/docs/interactive.html?type="basic"#counters
     * @see type="points" https://styleguide.brainly.com/latest/docs/interactive.html?type="points"#counters
     */
    icon?: IconTypeType | null | undefined;
    /**
     * There are two sizes options for counters, not need to be specify, default is xs
     * @example <Counter icon="points">
     *            1pts
     *          </Counter>
     */
    size?: CounterSizeType | null | undefined;
    /**
     * Optional boolean for counter with animation
     * @example <Counter type="basic" withAnimation>
     *            12
     *          </Counter>
     */
    withAnimation?: boolean;
    /**
     * Additional class names
     */
    className?: string;
  };

  export const Counter: ({
    icon,
    children,
    className,
    size,
    withAnimation,
    ...props
  }: CounterPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/form-elements/Textarea--------------

  type TextareaSizeType = "short" | "normal" | "tall" | "xtall";
  type TextareaColorType = "default" | "white";

  export type TextareaPropsType = {
    type?: string | ((evt: unknown) => React.ReactNode);
    /**
     * Additional function to set ref for textarea
     */
    textareaRef?: React.MutableRefObject<HTMLTextAreaElement | null>;
    /**
     * Optional specification for input value
     * @example <Textarea value="some example value" />
     */
    value?: unknown;
    /**
     * There are two color variants for form elements, default does not have to be specified
     * @example <Textarea color="white" placeholder="placeholder" />
     * @see color="default" https://styleguide.brainly.com/latest/docs/interactive.html?color="default"#textarea
     * @see color="white" https://styleguide.brainly.com/latest/docs/interactive.html?color="white"#textarea
     */
    color?: TextareaColorType | null | undefined;
    /**
     * Specify size of the textarea
     * @example <Textarea size="short" placeholder="example placeholder" />
     * @see size="short" https://styleguide.brainly.com/latest/docs/interactive.html?size="short"#textarea
     * @see size="normal" https://styleguide.brainly.com/latest/docs/interactive.html?size="normal"#textarea
     * @see size="tall" https://styleguide.brainly.com/latest/docs/interactive.html?size="tall"#textarea
     * @see size="xtall" https://styleguide.brainly.com/latest/docs/interactive.html?size="xtall"#textarea
     */
    size?: TextareaSizeType | null | undefined;
    /**
     * Optional boolean to specified if it's valid
     * @example <Textarea valid placeholder="example placeholder" />
     */
    valid?: boolean;
    /**
     * Optional boolean to specified if it's valid
     * @example <Textarea valid placeholder="example placeholder" />
     */
    invalid?: boolean;
    /**
     * Optional boolean to specified if it's full width
     * @example <Textarea fullWidth placeholder="example placeholder" />
     */
    fullWidth?: boolean;
    /**
     * Optional boolean for simple variant (does not have border radius)
     * @example <Textarea simple placeholder="example placeholder" />
     */
    simple?: boolean;
    /**
     * Optional boolean for variant with no padding
     * @example <Textarea noPadding placeholder="example placeholder" />
     */
    noPadding?: boolean;
    /**
     * Optional boolean for variant with height auto
     * @example <Textarea autoHeight placeholder="example placeholder" />
     */
    autoHeight?: boolean;
    /**
     * Optional Node if there should be an error message displayed
     * @example <Textarea errorMessage="This is an error" />
     */
    errorMessage?: React.ReactNode | string;
    /**
     * Additional class names
     */
    className?: string;
    rows?: string;
    placeholder?: string;
    onChange?: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyDown?: (evt: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  };

  export const Textarea: (props: TextareaPropsType) => JSX.Element;

  // ------------------------------------------------------------------
  // --------------------not used in Tutoring -------------------------
  // ------------------------------------------------------------------

  // -----------brainly-style-guide/components/action-list/ActionListHole--------------

  type ActionListHoleSpacingType = "xsmall" | "small";

  type ActionListHolePropsType = {
    children: React.ReactNode;
    asContainer?: boolean | null | undefined;
    spacing?: ActionListHoleSpacingType | null | undefined;
    noSpacing?: boolean | null | undefined;
    spaceBellow?: boolean | null | undefined;
    spacedLarge?: boolean | null | undefined;
    noShrink?: boolean | null | undefined;
    grow?: boolean | null | undefined;
    toEnd?: boolean | null | undefined;
    toRight?: boolean | null | undefined;
    stretch?: boolean | null | undefined;
    equalWidth?: boolean | null | undefined;
    hideOverflow?: boolean | null | undefined;
    className?: string | null | undefined;
  };

  export const ActionListHole: ({
    children,
    asContainer,
    spacing,
    noSpacing,
    spaceBellow,
    spacedLarge,
    noShrink,
    grow,
    toEnd,
    toRight,
    stretch,
    equalWidth,
    hideOverflow,
    className,
    ...props
  }: ActionListHolePropsType) => JSX.Element;

  // -----------brainly-style-guide/components/breadcrumbs/Breadcrumb--------------

  type BreadcrumbPropsType = {
    className?: string | null | undefined;
    adaptive?: boolean | null | undefined;
    short?: boolean | null | undefined;
    inlineItems?: boolean | null | undefined;
    elements: ReadonlyArray<React.ReactNode>;
  };

  const Breadcrumb: ({
    className,
    short,
    adaptive,
    inlineItems,
    elements,
    ...props
  }: BreadcrumbPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/bubble/Bubble--------------

  type BubbleColorType =
    | "blue"
    | "lavender"
    | "dark"
    | "mint"
    | "mint-secondary"
    | "mint-secondary-light"
    | "navyblue-secondary"
    | "blue-secondary"
    | "blue-secondary-light"
    | "gray-secondary-lightest"
    | "peach";

  type BubbleAligmentType = "start" | "center" | "end";
  type BubbleDirectionType = "left" | "right" | "top" | "bottom";

  type BubblePropsType = {
    children: React.ReactNode;
    className?: string | null | undefined;
    alignment?: BubbleAligmentType;
    direction: BubbleDirectionType;
    color?: BubbleColorType | null | undefined;
    full?: boolean | null | undefined;
    noShadow?: boolean | null | undefined;
  };

  export const Bubble: ({
    alignment,
    direction,
    color,
    full,
    noShadow,
    children,
    className,
    ...props
  }: BubblePropsType) => JSX.Element;

  // -----------brainly-style-guide/components/buttons/ButtonRound--------------

  type ButtonRoundType = {
    children?: React.ReactNode | null | undefined;
    className?: string | null | undefined;
    wide?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
    small?: boolean | null | undefined;
    href?: string;
    label?: string | null | undefined;
  };

  export const ButtonRound: ({
    label,
    children,
    href,
    className,
    ...props
  }: ButtonRoundType) => JSX.Element;

  // -----------brainly-style-guide/components/card/Card--------------

  export type CardPaddingType =
    | "padding-small"
    | "padding-normal"
    | "padding-large"
    | "padding-xlarge";

  type CardPropsType = {
    children?: React.ReactNode;
    className?: string;
    full?: boolean;
    vertical?: boolean;
    centered?: boolean;
    noBorder?: boolean;
    shadow?: boolean;
    transparent?: boolean;
    padding?: CardPaddingType;
  };

  export const Card: ({
    children,
    full,
    vertical,
    centered,
    padding,
    shadow,
    noBorder,
    transparent,
    className,
    ...props
  }: CardPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/card/CardHole--------------

  type CardColorType =
    | "blue"
    | "blue-secondary"
    | "blue-secondary-light"
    | "lavender"
    | "lavender-secondary"
    | "lavender-secondary-light"
    | "mint"
    | "mint-secondary"
    | "mint-secondary-light"
    | "mustard"
    | "mustard-secondary"
    | "mustard-secondary-light"
    | "gray"
    | "gray-secondary"
    | "gray-secondary-light"
    | "gray-secondary-lightest"
    | "gray-secondary-ultra-light";

  type CardHolePropsType = {
    children: React.ReactNode;
    className?: string;
    color?: CardColorType;
  };

  export const CardHole: ({
    color,
    children,
    className,
    ...props
  }: CardHolePropsType) => JSX.Element;

  // -----------brainly-style-guide/components/content-box/ContentBox--------------

  type ContentBoxSizeType =
    | "xxsmall"
    | "xsmall"
    | "small"
    | "normal"
    | "large"
    | "xlarge"
    | "xxlarge";

  type ContentBoxPropsType = {
    children: React.ReactNode;
    spaced?: boolean | null | undefined;
    spacedSmall?: boolean | null | undefined;
    full?: boolean | null | undefined;
    className?: string | null | undefined;
    spacedTop?: ContentBoxSizeType | null | undefined;
    spacedBottom?: ContentBoxSizeType | null | undefined;
  };

  export const ContentBox: ({
    children,
    spacedTop,
    spacedBottom,
    spaced,
    spacedSmall,
    full,
    className,
    ...props
  }: ContentBoxPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/content-box/ContentBoxActions--------------

  type ContentBoxAligmentType = "left" | "center" | "right";

  type ContentBoxActionsPropsType = {
    children: React.ReactNode;
    className?: string | null | undefined;
    spacedTop?: ContentBoxSizeType | null | undefined;
    spacedBottom?: ContentBoxSizeType | null | undefined;
    align?: ContentBoxAligmentType;
  };

  export const ContentBoxActions: ({
    children,
    spacedTop,
    spacedBottom,
    className,
    align,
    ...props
  }: ContentBoxActionsPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/content-box/ContentBoxContent--------------

  type ContentBoxContentPropsType = {
    children: React.ReactNode;
    full?: boolean | null | undefined;
    className?: string | null | undefined;
    spacedTop?: ContentBoxSizeType | null | undefined;
    spacedBottom?: ContentBoxSizeType | null | undefined;
    align?: ContentBoxAligmentType;
  };

  export const ContentBoxContent: ({
    children,
    full,
    spacedTop,
    spacedBottom,
    className,
    align,
    ...props
  }: ContentBoxContentPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/content-box/ContentBoxHeader--------------

  type ContentBoxHeaderPropsType = {
    children: React.ReactNode;
    spaced?: boolean | null | undefined;
    spacedSmall?: boolean | null | undefined;
    full?: boolean | null | undefined;
    className?: string | null | undefined;
    spacedTop?: ContentBoxSizeType | null | undefined;
    spacedBottom?: ContentBoxSizeType | null | undefined;
    align?: ContentBoxAligmentType;
  };

  export const ContentBoxHeader: ({
    children,
    spaced,
    spacedSmall,
    spacedTop,
    spacedBottom,
    className,
    align,
    ...props
  }: ContentBoxHeaderPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/content-box/ContentBoxTitle--------------

  type ContentBoxTitlePropsType = {
    children: React.ReactNode;
    spaced?: boolean | null | undefined;
    spacedSmall?: boolean | null | undefined;
    className?: string | null | undefined;
    spacedTop?: ContentBoxSizeType | null | undefined;
    spacedBottom?: ContentBoxSizeType | null | undefined;
    align?: ContentBoxAligmentType;
  };

  export const ContentBoxTitle: ({
    children,
    spaced,
    spacedSmall,
    spacedTop,
    spacedBottom,
    className,
    align,
  }: ContentBoxTitlePropsType) => JSX.Element;

  // -----------brainly-style-guide/components/dropdowns/Dropdown--------------

  type DropdownLinksType = {
    label: string;
    url: string;
  };

  type DropdownPropsType = {
    name: string;
    links: Array<DropdownLinksType>;
    initiallyOpened?: boolean;
    color?: "default" | "white";
    fullWidth?: boolean;
  };

  export const Dropdown: ({
    name,
    links,
    initiallyOpened,
    color,
    fullWidth,
  }: DropdownPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/file-handler/FileHandler--------------

  export type FileHandlerColorType = "gray" | "mono";

  type FileHandlerPropsType = {
    /**
     * Specify color of the background for FileHandler
     * @example <FileHandler color="mono">
     *            text
     *          </FileHandler>
     * @default gray
     */
    color: FileHandlerColorType;
    /**
     * Specify iconType to display SG icon as the image inside FileHandler
     * @example <FileHandler iconType="answer">
     *            text
     *          </FileHandler>
     * @default attachment
     */
    iconType?: IconTypeType;
    /**
     * Specify thumbnailSrc of the image inside FileHandler
     * @example <FileHandler thumbnailSrc="https://source.unsplash.com/64x64/?bird">
     *            text
     *          </FileHandler>
     */
    thumbnailSrc?: string;
    /**
     * Specify src of the file to display it in the new tab when link is clicked
     * @example <FileHandler src="https://source.unsplash.com/64x64/?bird">
     *            text
     *          </FileHandler>
     */
    src?: string;
    /**
     * Optional boolean for loading state of FileHandler
     * @example <FileHandler loading>
     *            text
     *          </FileHandler>
     * @default false
     */
    loading?: boolean;
    /**
     * Callback, called by clicking on **close** button. If specified, button will be added automatically
     * @example <FileHandler onClose={() => doSomething()}>
     *            text
     *          </FileHandler>
     */
    onClose?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Callback, called by clicking on link
     * @example <FileHandler
     *           src="https://source.unsplash.com/64x64/?bird"
     *           onClose={() => doSomething()}
     *          >
     *            text
     *          </FileHandler>
     */
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Additional function to set ref for text
     */
    textRef?: {
      current: HTMLSpanElement | null;
    };
    /**
     * Additional class names
     */
    className?: string;
    /**
     * Children to be rendered inside FileHandler
     * @example <FileHandler>
     *            text
     *          </FileHandler>
     */
    children: React.ReactNode;
  };

  export const FileHandler: ({
    children,
    color,
    iconType,
    thumbnailSrc,
    src,
    loading,
    onClose,
    onClick,
    textRef,
    className,
    ...props
  }: FileHandlerPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/footer/Footer--------------

  type FooterPropsType = {
    children: React.ReactNode;
    className?: string;
  };

  export const Footer: ({
    children,
    className,
    ...props
  }: FooterPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/footer/FooterLine--------------

  type FooterLinePropsType = {
    children: React.ReactNode;
    className?: string;
  };

  export const FooterLine: ({
    children,
    className,
    ...props
  }: FooterLinePropsType) => JSX.Element;

  // -----------brainly-style-guide/components/form-elements/Select--------------

  type OptionsPropsType = {
    value: string;
    text: string;
  };

  type SelectSizeType = "m" | "l";
  type SelectColorType = "default" | "white";

  export type SelectPropsType = {
    /**
     * Optional specification for select value
     * @example <Select value="Option1" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
     */
    value?: string;
    /**
     * Optional boolean to specified if it's valid
     * @example <Select valid options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
     */
    valid?: boolean;
    /**
     * Optional boolean to specified if it's invalid
     * @example <Select invalid options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
     */
    invalid?: boolean;
    /**
     * Optional boolean to specified if it's capitalized
     * @example <Select capitalized options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
     */
    capitalized?: boolean;
    /**
     * There are two color variants for form elements, default does not have to be specified
     * @example <Select color="white" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
     * @see color="default" https://styleguide.brainly.com/latest/docs/interactive.html?color="default"#select
     * @see color="white" https://styleguide.brainly.com/latest/docs/interactive.html?color="white"#select
     */
    color?: SelectColorType | null | undefined;
    /**
     * There are two sizes options for most of the form elements
     * @example <Select size="m" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
     * @see size="m" https://styleguide.brainly.com/latest/docs/interactive.html?size="m"#select
     * @see size="l" https://styleguide.brainly.com/latest/docs/interactive.html?size="l"#select
     */
    size?: SelectSizeType | null | undefined;
    /**
     * Optional boolean to specified if it's full width
     * @example <Select fullWidth placeholder="placeholder" />
     */
    fullWidth?: boolean;
    /**
     * Optional array of options of the select
     * @example <Select size="m" options={[{value: 'option1', text: 'Option1'},{value: 'option2', text: 'Select selector'}]} />
     */
    options?: Array<OptionsPropsType>;
    /**
     * Additional class names
     */
    className?: string;
  };

  export const Select: (props: SelectPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/header/Header--------------

  type HeaderPropsType = {
    children: React.ReactNode;
    withDivider?: boolean;
    fixed?: boolean;
    className?: string;
  };

  export const Header: ({
    children,
    fixed,
    withDivider,
    className,
    ...props
  }: HeaderPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/header/HeaderContainer--------------

  type HeaderContainerPropsType = {
    children: React.ReactNode;
    className?: string;
  };

  export const HeaderContainer: ({
    children,
    className,
    ...props
  }: HeaderContainerPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/header/HeaderContent--------------

  type HeaderContentPropsType = {
    children: React.ReactNode;
    autoHeight?: boolean;
    className?: string;
  };

  export const HeaderContent: ({
    children,
    autoHeight,
    className,
    ...props
  }: HeaderContentPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/header/HeaderLeft--------------

  type HeaderLeftPropsType = {
    children?: React.ReactNode;
    className?: string;
  };

  export const HeaderLeft: ({
    children,
    className,
    ...props
  }: HeaderLeftPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/header/HeaderMiddle--------------

  type HeaderMiddlePropsType = {
    children?: React.ReactNode;
    className?: string;
  };

  export const HeaderMiddle: ({
    children,
    className,
    ...props
  }: HeaderMiddlePropsType) => JSX.Element;

  // -----------brainly-style-guide/components/header/HeaderRight--------------

  type HeaderRightPropsType = {
    children?: React.ReactNode;
    className?: string;
  };

  export const HeaderRight: ({
    children,
    className,
    ...props
  }: HeaderRightPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/helpers/RwdHelper--------------

  type RwdHelperTypeType =
    | "small-only"
    | "medium-only"
    | "medium-down"
    | "medium-up"
    | "large-only";

  type PropsType = {
    hide: RwdHelperTypeType;
    children: React.ReactElement<HTMLElement> | string;
  };

  export const RwdHelper: ({ hide, children }: PropsType) => JSX.Element | null;

  // -----------brainly-style-guide/components/home-button/HomeButton--------------

  type HomeButtonPropsType = {
    type?: LogoTypeType;
    href?: string;
    className?: string;
    altTag?: string;
  };

  export const HomeButton: ({
    type,
    href,
    className,
    altTag,
    ...props
  }: HomeButtonPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/layout/Layout--------------

  type LayoutPropsType = {
    className?: string | null | undefined;
    children: React.ReactNode;
  };

  export const LayoutAsideContent: ({
    children,
    className,
    ...props
  }: LayoutPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/layout/LayoutBox--------------

  type LayoutBoxPropsType = {
    className?: string | null | undefined;
    children: React.ReactNode;
  };

  export const LayoutBox: ({
    children,
    className,
    ...props
  }: LayoutBoxPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/layout/LayoutConten--------------

  type LayoutContentPropsType = {
    className?: string | null | undefined;
    children: React.ReactNode;
    noMaxWidth?: boolean;
    center?: boolean;
  };

  export const LayoutContent: ({
    children,
    noMaxWidth,
    center,
    className,
    ...props
  }: LayoutContentPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/layout/LayoutSecondaryContent--------------

  type LayoutSecondaryContentPropsType = {
    className?: string | null | undefined;
    children: React.ReactNode;
  };

  export const LayoutSecondaryContent: ({
    children,
    className,
    ...props
  }: LayoutSecondaryContentPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/list/List--------------

  type ListPropsType = {
    children?: React.ReactNode;
    spaced?: boolean;
    className?: string;
  };

  export const List: ({
    spaced,
    className,
    children,
    ...props
  }: ListPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/list/ListItem--------------

  type ListItemPropsType = {
    children?: React.ReactNode;
    className?: string;
  };

  export const ListItem: ({
    children,
    className,
    ...props
  }: ListItemPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/list/ListItemIcon--------------

  type ListItemIconPropsType = {
    children?: React.ReactNode;
    className?: string;
    small?: boolean;
  };

  export const ListItemIcon: ({
    small,
    children,
    className,
    ...props
  }: ListItemIconPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/list/MenuList--------------

  type MenuListSizeType = "small" | "normal" | "large";

  type MenuListPropsType = {
    size?: MenuListSizeType;
    className?: string;
    items?: Array<MenuItemPropsType>;
  };

  export const MenuList: ({
    items,
    size,
    className,
    ...props
  }: MenuListPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/list/subcomponents/MenuItem--------------

  type MenuItemPropsType = {
    className?: string;
    href?: string;
    text: string;
    type?: string | ((arg: unknown) => React.ReactNode);
  };

  export const MenuItem: ({
    text,
    href,
    type,
    className,
    ...restProps
  }: MenuItemPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/media/Media--------------

  type MediaPropsType = {
    aside: React.ReactNode;
    contentArray: Array<React.ReactNode>;
    toRight?: boolean;
    focused?: boolean;
    clickable?: boolean;
    noPadding?: boolean;
    transparent?: boolean;
    graySecondaryLight?: boolean;
    small?: boolean;
    spacedBottom?: boolean;
    className?: string;
  };

  export const Media: (props: MediaPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/mobile-icons/MobileIcon--------------

  type MobileIconIconTypeType =
    | "answer-bubble"
    | "ask-bubble"
    | "barcode-scanner"
    | "chapter"
    | "clear"
    | "comment"
    | "crown"
    | "crown-outline"
    | "cup"
    | "flashlight-off"
    | "flashlight-on"
    | "heart-outline"
    | "info"
    | "keyboard"
    | "options"
    | "sent"
    | "share-on-ios"
    | "spark"
    | "star-outline"
    | "text"
    | "textbook";

  type MobileIconSizeType =
    | 104
    | 102
    | 80
    | 78
    | 56
    | 54
    | 40
    | 32
    | 30
    | 26
    | 24
    | 22
    | 20
    | 18
    | 16
    | 14
    | 10;

  type MobileIconPropsType = {
    type: MobileIconIconTypeType;
    size?: MobileIconSizeType;
    color?: IconColorType;
    className?: string;
  };

  export const MobileIcon: ({
    type,
    size,
    color,
    className,
    ...props
  }: MobileIconPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/overlayed-box/OverlayedBox--------------

  type OverlayedBoxType = {
    children?: React.ReactNode | null | undefined;
    overlay?: React.ReactNode | null | undefined;
    className?: string;
  };

  export const OverlayedBox: ({
    overlay,
    children,
    className,
    ...props
  }: OverlayedBoxType) => JSX.Element;

  // -----------brainly-style-guide/components/popup-menu/PopupMenu--------------

  type PopupMenuPropsType = {
    items: Array<React.ReactNode>;
    extraSpacing?: boolean;
    className?: string;
  };

  export const PopupMenu: ({
    items,
    extraSpacing,
    className,
    ...props
  }: PopupMenuPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/rating/subcomponents/RateCounter--------------

  type RateCounterPropsType = {
    counterText?: string;
    activeText?: string;
  };

  export const RateCounter: ({
    activeText,
    counterText,
  }: RateCounterPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/rating/subcomponents/RateCounterItem--------------

  type RateCounterItemPropsType = {
    text?: string;
  };

  export const RateCounterItem: ({
    text,
  }: RateCounterItemPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/search/Search-------------

  type SearchPropsType = {
    inputClassName?: string;
    withRoundButton?: boolean;
  } & InputPropsType;

  export const Search: ({
    className,
    fullWidth,
    size,
    withRoundButton,
    inputClassName,
    ...additionalProps
  }: SearchPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/spinner-container/SpinnerContainer-------------

  type SpinnerContainerPropsType = {
    loading?: boolean;
    light?: boolean;
    fullWidth?: boolean;
    size?: SpinnerSizeType;
    children?: React.ReactNode;
  };

  export const SpinnerContainer: ({
    loading,
    light,
    fullWidth,
    size,
    children,
    ...props
  }: SpinnerContainerPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/subject-icons/SubjectIcon--------------

  export type SubjectIconTypeType =
    | "accountancy"
    | "administration"
    | "agricultural"
    | "algebra"
    | "all"
    | "arabic"
    | "art"
    | "artmusic"
    | "astronomy"
    | "belarus"
    | "belarus-alt"
    | "biology"
    | "business"
    | "catala"
    | "chemistry"
    | "chinese"
    | "economics"
    | "egzam"
    | "english"
    | "entrepreneurship"
    | "environment"
    | "ethics"
    | "euskara"
    | "first-aid"
    | "french"
    | "galego"
    | "geography"
    | "geology"
    | "geometry"
    | "german"
    | "grammar"
    | "health"
    | "history"
    | "india-lang"
    | "indonesian-lang"
    | "informatics"
    | "italian"
    | "japanese"
    | "kazach"
    | "kazach-alt"
    | "kyrgyz"
    | "korean"
    | "language"
    | "latin"
    | "law"
    | "life-science"
    | "literature"
    | "logic"
    | "mathematics"
    | "music"
    | "nigerian-lang"
    | "otherlanguages"
    | "others"
    | "pedagogics"
    | "philosophy"
    | "physical-education"
    | "physics"
    | "politics"
    | "psychology"
    | "religion"
    | "rpa-lang"
    | "russian"
    | "russian-alt"
    | "science"
    | "security"
    | "skills"
    | "social-science"
    | "sociology"
    | "spanish"
    | "statistics"
    | "technology"
    | "tourism"
    | "traffic"
    | "ukrainian"
    | "ukrainian-alt"
    | "ukrainian-literature"
    | "uzbek"
    | "wos";

  type SubjectIconSizeType = "small" | "medium" | "normal";

  type SubjectIconPropsType = {
    className?: string;
    type: SubjectIconTypeType;
    size?: SubjectIconSizeType;
    monoColor?: IconColorType;
  };

  export const SubjectIcon: ({
    type,
    size,
    monoColor,
    className,
    ...props
  }: SubjectIconPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/subject-icons/SubjectIconBox--------------

  type SubjectIconBoxPropsType = {
    className?: string;
    darker?: boolean;
    type: SubjectIconTypeType;
    size?: SubjectIconSizeType;
  };

  export const SubjectIconBox: ({
    type,
    size,
    darker,
    className,
    ...props
  }: SubjectIconBoxPropsType) => JSX.Element;

  // -----------brainly-style-guide/components/text/TextBit--------------

  type TextBitTypeType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
  type TextBitSizeType = "small" | "medium" | "large" | "xlarge";

  type TextBitColorType =
    | "blue-primary"
    | "blue-secondary"
    | "mint-primary"
    | "mint-secondary"
    | "lavender-primary"
    | "lavender-secondary"
    | "peach-primary"
    | "peach-secondary"
    | "mustard-primary"
    | "mustard-secondary"
    | "gray-secondary"
    | "gray-secondary-light"
    | "white"
    | "black";

  type TextBitPropsType = {
    children: React.ReactNode;
    type?: TextBitTypeType;
    size?: TextBitSizeType;
    color?: TextBitColorType | null | undefined;
    className?: string | null | undefined;
  };

  export const TextBit: ({
    children,
    type,
    size,
    color,
    className,
    ...props
  }: TextBitPropsType) => JSX.Element;
}

declare module "brainly-style-guide/src/components/icons/Icon" {
  export type IconTypeType =
    | "academic_cap"
    | "all_questions"
    | "answer"
    | "arrow_double_down"
    | "arrow_down"
    | "arrow_left"
    | "arrow_right"
    | "arrow_up"
    | "ask_parent_to_pay"
    | "attachment"
    | "bell_checked"
    | "bell_outlined"
    | "bold"
    | "bulleted_list"
    | "calendar"
    | "camera"
    | "check"
    | "close"
    | "comment"
    | "comment_outlined"
    | "counter"
    | "credit_card"
    | "crown_outlined"
    | "equation"
    | "excellent"
    | "exclamation_mark"
    | "facebook"
    | "friend_add"
    | "friend_remove"
    | "friend_pending"
    | "friend_checked"
    | "friends"
    | "heading"
    | "heart"
    | "heart_outlined"
    | "image"
    | "influence"
    | "instagram"
    | "italic"
    | "less"
    | "linkedin"
    | "lock_with_play"
    | "logout"
    | "medium"
    | "menu"
    | "messages"
    | "mic"
    | "money_transfer"
    | "add_more"
    | "notifications"
    | "numbered_list"
    | "open_in_new_tab"
    | "padlock"
    | "pencil"
    | "play"
    | "plus"
    | "points"
    | "profile"
    | "profile_view"
    | "question"
    | "recent_questions"
    | "reload"
    | "report_flag"
    | "report_flag_outlined"
    | "rotate"
    | "rotate_90"
    | "search"
    | "seen"
    | "settings"
    | "share"
    | "sms"
    | "star"
    | "star_half"
    | "star_half_outlined"
    | "star_outlined"
    | "subtitle"
    | "symbols"
    | "title"
    | "toughest_questions"
    | "trash"
    | "twitter"
    | "underlined"
    | "unseen"
    | "verified"
    | "warning"
    | "youtube"
    | "arrow_top_right"
    | "circle"
    | "crop"
    | "cyrillic"
    | "draw"
    | "drawing_mode"
    | "european"
    | "greek"
    | "highlight"
    | "line"
    | "more"
    | "pause"
    | "rectangle"
    | "sup_sub"
    | "triangle"
    | "pi"
    | "quote"
    | "spark";
}
