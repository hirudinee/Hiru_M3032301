let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {
	
	
	
	sns.publish({
		Message: 'test',
		MessageAttributes: {
			'test-message': {
				DataType: 'String',
				StringValue: 'sample message'
			},
		},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:upulie_topic_jan17'
	}).promise()
		.then(data => {
			// your code goes here
		})
		.catch(err => {
			// error handling goes here
		});


	callback(null, 'Successfully executed');
}