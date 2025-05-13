function formatPoem(text) {
    const sentences = text.split('. ');
    return sentences.map(sentence => sentence.endsWith('.') ? sentence : sentence + '.').join('\n');
  }
  