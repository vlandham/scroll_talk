require('dplyr')
require("ggplot2")
library(lubridate)

filename <- "words.tsv"

raw_data <- read.table(filename, sep = "\t", header = FALSE)

colnames(raw_data) <- c('word','time')

p <- ggplot(raw_data, aes(x = time))
p + geom_histogram()
