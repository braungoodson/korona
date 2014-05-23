describe('MyController',function(){
	it('should have a message to test',function(){
		var scope = {},
			controller = new MyController(scope);
		expect(scope.message).not.toBe(null);
		expect(scope.message).toBe("Test me.");
	});
});