
upshot_colors <- c(
  dkgray = rgb(60, 60, 60, max = 255),
  medgray = rgb(210, 210, 210, max = 255),
  ltgray = rgb(238, 238, 238, max = 255),
  white= rgb(255,255, 255, max = 255),
  pink = rgb(92, 0, 51, max = 255),
  blue = rgb(0, 143, 213, max = 255),
  green = rgb(119, 171, 67, max = 255)
  )

#' Theme inspired by The Upshot plots
#'
#' Theme inspired by the plots on \href{NYT The Upshot}{http://www.nytimes.com/upshot/}.
#'
#' @param base_size Base font size.
#' @param base_family Plot text font family.
#' @family themes upshot
#' @export
#' @examples
#'  (qplot(hp, mpg, data= subset(mtcars, cyl != 5), geom="point", color = factor(cyl))
#'  + ggtitle("Horsepower, mpg and cylinders")
#'  + geom_smooth(method = "lm", se = FALSE)
#'  + scale_color_upshot()
#'  + theme_upshot())
theme_upshot <- function(base_size = 12, base_family = "sans") {
  (theme_foundation(base_size = base_size, base_family = base_family)
   + theme(
     line = element_line(size = 0.9),
     rect = element_rect(fill = upshot_colors['white'], linetype = 0, colour = NA),
     text = element_text(colour = upshot_colors['dkgray']),
     axis.title = element_blank(),
     axis.text = element_text(),
     axis.ticks = element_blank(),
     axis.line = element_blank(),
     legend.background = element_rect(),
     legend.position = "bottom",
     legend.direction = "horizontal",
     legend.box = "vertical",
     panel.grid = element_line(colour = NULL),
     panel.grid.major = element_line(colour = upshot_colors['ltgray'], size = 0.8),
     panel.grid.minor = element_blank(),
     # unfortunately, can't mimic subtitles
     plot.title = element_text(hjust = 0, size = rel(1.5), face = "bold"),
     plot.margin = unit(c(1, 1, 1, 1), "lines"),
     strip.background=element_rect()))
}

#' upshot color palette
#'
#' The standard upshot.com palette for line plots 
#'
#' @family colour upshot
#' @export
#' @examples
#' library("scales")
#' show_col(upshot_pal()(3))
upshot_pal <- function(fill = TRUE) {
  function(n) {
    colors <- upshot_colors[c('pink', 'blue', 'green')]
    unname(colors[seq_len(n)])
  }
}

##' upshot color scales
##'
##' Color scales using the colors in the upshot graphics.
##'
##' @inheritParams ggplot2::scale_colour_hue
##' @family colour upshot
##' @rdname scale_upshot
##' @seealso \code{\link{theme_upshot}} for examples.
##' @export
scale_colour_upshot <- function(...) {
  discrete_scale("colour", "upshot", upshot_pal(), ...)  
}

#' @rdname scale_fivethirtyeight
#' @export
scale_color_upshot <- scale_colour_upshot