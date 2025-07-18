import { test, expect } from '@playwright/test';

const REPO = 'test-repo-1';
const USER = 'github-username';

test('Login to ganarate a new token', async ({ request }) => {
  const token = await request.post('/api/login', {
    data: {
      email: "george.bluth@reqres.in",
      password: "pass123",
    }
  });
  expect(token.ok()).toBeTruthy();

});