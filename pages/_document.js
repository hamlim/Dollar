import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

const reset = `
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  html {
    box-sizing: border-box;
    font-size: 18px;
    font-family: Avenir,sans-serif;
  }
`

export default class Doc extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const { ids, css } = extractCritical(renderPage())
    return { html, head, errorHtml, chunks, ids, css }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Dollar</title>
          <style>{reset}</style>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
