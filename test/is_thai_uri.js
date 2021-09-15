var test = require("tap").test,
    is_web_uri = require('../').is_web_uri;

test("testing is_thai_uri", function (t) {

    // valid
    t.ok(is_web_uri('https://universal-acceptance-test.international/'), 'https://universal-acceptance-test.international/');
    t.ok(is_web_uri('https://universal-acceptance-test.icu'), 'https://universal-acceptance-test.icu');
    t.ok(is_web_uri('https://ยูเอทดสอบ.ไทย'), 'https://ยูเอทดสอบ.ไทย');
    t.ok(is_web_uri('https://ทีเอชนิค.องค์กร.ไทย'), 'https://ทีเอชนิค.องค์กร.ไทย');
    t.ok(is_web_uri('https://เราไม่ทิ้งกัน.com'), 'https://เราไม่ทิ้งกัน.com');

    t.end();
});
