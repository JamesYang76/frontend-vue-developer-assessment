export const findAllByText = (wrapper, selector, text) => {
  return wrapper.findAll(selector).filter(node => node.text().match(text))
}
