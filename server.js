/* eslint-disable no-console */
import app from './src/app'

const port = 3000

app.listen(port, () => {
    console.log(`App running on ${port}`)
})