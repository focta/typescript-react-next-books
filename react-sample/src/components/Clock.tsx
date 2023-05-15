import React, { useEffect, useState } from "react";

const UPDATE_CYCLE = 1000;

const KEY_LOCALE = "KEY_LOCAL";

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.JP:
      return Locale.JP;
    default:
      return Locale.US;
  }
};

export default function Clock() {
  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setLocale] = useState(Locale.US);

  // 描画には関係のないタイマーの設定
  // 初期描画時に初期値を設定できればよいので、第2引数にから配列を渡す
  useEffect(() => {
    {
      const timer = setInterval(() => {
        setTimestamp(new Date());
      }, UPDATE_CYCLE);

      return () => {
        clearInterval(timer);
      };
    }
  }, []);

  // こちらも初期描画時にlocalStorageのlocaleの値を読み込む動作をしたいので、第2引数にから配列を渡す
  useEffect(()=> {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if (savedLocale !== null) {
        setLocale(getLocaleFromString(savedLocale))
    }
  }, [])

  // こちらはlocaleの変化に合わせてlocalStorageにlocaleの値を保存したいので、第2引数にlocaleを渡す
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale);
  }, [locale]);

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleDateString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
            <option value="en-US">en-US</option>
            <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  );
}
