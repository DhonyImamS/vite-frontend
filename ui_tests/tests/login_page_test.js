import { Selector } from 'testcafe';

fixture('Login Page Joba')
    .page('http://localhost:5173/login');

    test('Login Page Tests', async t => {
        // Test code goes here
        await t
            .maximizeWindow()
            .typeText('input[type="email"]', 'dhony.imamsaputra@gmail.com')
            .typeText('input[type="password"]', '12345678');

        await t.expect(Selector('input[type="email"]').value).eql('dhony.imamsaputra@gmail.com');
        await t.expect(Selector('input[type="password"]').value).eql('12345678');
    });