const { getUsers } = require('../../src/controllers/userController')

test('getUsers should return a 200 response', () => {
  const req = {}
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  }

  getUsers(req, res)

  expect(res.status).toHaveBeenCalledWith(200)
  expect(res.json).toHaveBeenCalledWith({ message: 'List of users' })
})
