import Express from 'express';
import webpack from 'webpack';
import webpackConfig from './../webpack/webpack.development.babel.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const compiler = webpack(webpackConfig);
const serverOptions = {
  quiet: false,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
};

const app = new Express();

app.use(webpackDevMiddleware(compiler, serverOptions));
app.use(webpackHotMiddleware(compiler));
app.use('/', Express.static('dev'));

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info('Webpack development server listening on port 3000');
  }
});
