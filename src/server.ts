import config from './App/config';
import app from './app';
import mongoose from 'mongoose';
const { port, dataBase_url } = config;
// const port = 5000;
async function main() {
  try {
    await mongoose.connect(dataBase_url as string);
    app.listen(port, () => {
      console.log(`Example apps listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
