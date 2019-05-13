# Brainly spacings

### Introduction

At Brainly, we are using "Soft grid". Soft grid means that we simply measure 8-px
increments between individual elements (paddings, margins). If there is
 a possibility to define width or height - we are doing it (as an increment
of 8px). The argument for the Soft Grid method is that when it comes
time to code up an interface, using an actual grid is irrelevant because
programming languages don’t use that kind of grid structure - it’ll just
get thrown away. When the speed at which you arrive at a high-quality,
programmable set of mockups is a priority, bypassing Hard Grid’s extra
overhead of managing additional layers in favor of Soft Grid’s more
fluid, minimal structure can be an advantage.

Use multiples of 8 to define dimensions, padding, and margin of both
block and inline elements.

### Spacing scale

The spacing scale is based on 8px scale. This the scale which is highly composable - it can be divided and multiplied many times and result in whole numbers. We add one exception to the scale which is 4px - this is utils added to create small padding and margins for little components or denser parts of the site.

These variables are encouraged to be used within components and custom CSS. The spacing scale is also used for margin and padding utilities.

Variable | Value
------------ | -------------
xxs | 4px
xs | 8px
x | 16px
m | 24px
l | 40px
xl | 64px
xxl |  104px
xxxl | 168px
xxxxl | 272px

### Spacing util function usage

Margin and padding utilities should be based on this global spacing scale which helps keep horizontal and vertical spacing consistent. To allow us to work with this scale, we introduced `spacing` util function:


``` css
.my-class {
    margin: spacing(m);
}

/* This will result into */

.my-class {
    margin: 24px;
}
```
