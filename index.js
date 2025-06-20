import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import puppeteer from 'puppeteer'
import replace from 'absolutify'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

// Statik fayllar uchun
app.use(express.static(join(__dirname, 'public')))

// Asosiy sahifa
app.get('/', (req, res) => {
	res.sendFile(join(__dirname, 'public', 'index.html'))
})

app.get('/proxy', async (req, res) => {
	const { url } = req.query
	if (!url) {
		return res.send('url not found')
	} else {
		try {
			const browser = await puppeteer.launch()
			const page = await browser.newPage()
			await page.goto(`https://${url}`)
			let document = await page.evaluate(
				() => document.documentElement.outerHTML
			)
			document = replace(document, `/proxy?url=${url.split('/')[0]}`)

			await browser.close()
			return res.send(document)
		} catch (error) {
			console.log(error)
			return res.send(error)
		}
	}
})

app.listen(3000, () => {
	console.log('server is running on port 3000')
})
