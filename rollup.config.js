import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
	input: ['index.js'],
	output: {
		file: 'build/index.js',
    format: 'es',
		sourcemap: true
	},
	plugins: [
		resolve(),
		babel(),
		serve({
      open: true,
			contentBase: `build`,
			historyApiFallback: true
    }),
    livereload(`build`)
	]
};