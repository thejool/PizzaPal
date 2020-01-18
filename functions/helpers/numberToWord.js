// Replace numbers with words for better looking conversations
const numberToWord = number => {
  const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
  return words[number]
}

module.exports = numberToWord