require('dplyr')
require("ggplot2")
require('ggthemes')
require("scales")
require('grid')
library(lubridate)

filename <- "words.tsv"

source("upshot.R")

raw_data <- read.table(filename, sep = "\t", header = FALSE)
colnames(raw_data) <- c('word','time', 'is_um')

p <- ggplot(filter(raw_data, is_um == 1), aes(x = (time / 60)))
p <- p + geom_histogram(binwidth = 2, color = "white", fill = "#777777") + theme_upshot(base_size = 16) + labs(title = "Filler Counts Over Time")
p
ggsave("filler_histogram.png",p)
ggsave("filler_histogram.svg",p)
#p + facet_grid(word ~ .)


um_counts <- raw_data %>% filter(is_um == 1) %>% group_by(word) %>% summarise(count = n()) %>% arrange(count)

p <- ggplot(um_counts, aes(x = factor(word, levels = um_counts$word), y = count))
p <- p + geom_bar(stat="identity", color = "white", fill = "#777777") + coord_flip() + labs(x = "") + theme_upshot(base_size = 16) + labs(title = "Filler Words Used")
p
ggsave("filler_word_counts.png",p)
ggsave("filler_word_counts.svg",p)
