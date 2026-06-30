const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 300,
  });

  const context = await browser.newContext({
    locale: 'ja-JP',
    timezoneId: 'Asia/Tokyo',
    viewport: { width: 1280, height: 900 },
  });

  const page = await context.newPage();

  console.log('ヨドバシカメラのログインページに移動中...');
  await page.goto('https://www.yodobashi.com/ec/member/login/index.html', {
    waitUntil: 'networkidle',
    timeout: 30000,
  });

  console.log('ページタイトル:', await page.title());
  console.log('現在のURL:', page.url());

  // ログインフォームが表示されるまで待機
  await page.waitForSelector('input', { timeout: 10000 }).catch(() => {});

  console.log('\nブラウザが開きました。手動でログインしてください。');
  console.log('ログイン完了後、このスクリプトは自動で終了します（タイムアウト: 5分）。');
  console.log('強制終了するには Ctrl+C を押してください。\n');

  // マイページへの遷移を待ってログイン完了を検知
  await page.waitForURL('**/ec/member/**', { timeout: 300000 }).catch(() => {
    console.log('タイムアウトまたはウィンドウが閉じられました。');
  });

  const finalUrl = page.url();
  if (finalUrl.includes('/ec/member/') && !finalUrl.includes('/login/')) {
    console.log('ログイン成功！現在のURL:', finalUrl);
  }

  await browser.close();
})();
