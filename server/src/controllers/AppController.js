/**
 * Base Controller
 */
class AppController {
	/**
	 * SET THE DEFAULT VALUE
	 */
	constructor() {
		this.data = {};
		this.status = true;
		this.erorr_code = '';
		this.errors = {};
		this.message = '';
	}
	/**
	* @param {Object} req The request object
	* @param {Object} res The response object
	* @param {function} next The callback to the next program handler
	* @return {void}
	*/
	response(req, res, next) {
		res.setHeader('Content-Type', 'application/json');

		let response = {

			data: this.data,
			status: this.status,
			error_code: this.error_code,
			errors: this.error_code,
			message: this.message,
		};

		res.send(JSON.stringify(response));
	}
}

export default AppController;
