"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useLocale } from "next-intl";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function AuthModal({
  isOpen,
  onClose,
  onSuccess,
}: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const locale = useLocale();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(getErrorMessage("loginError"));
      } else {
        onSuccess?.();
        onClose();
        // Refresh the page to update the session
        window.location.reload();
      }
    } catch {
      setError(getErrorMessage("loginError"));
    } finally {
      setIsLoading(false);
    }
  };

  const getErrorMessage = (key: string) => {
    if (locale === "zh") {
      return key === "loginError"
        ? "登录失败，请检查您的邮箱和密码"
        : "发生错误";
    } else if (locale === "zh-TW") {
      return key === "loginError"
        ? "登入失敗，請檢查您的郵箱和密碼"
        : "發生錯誤";
    } else {
      return key === "loginError"
        ? "Login failed. Please check your email and password."
        : "An error occurred";
    }
  };

  const getText = (key: string) => {
    if (locale === "zh") {
      const texts = {
        signInTitle: "登录以下载资料",
        signInSubtitle: "请使用您的账户登录",
        email: "邮箱地址",
        password: "密码",
        signIn: "登录",
        signingIn: "登录中...",
        close: "关闭",
        registerPrompt: "还没有账户？请联系我们创建账户。",
      };
      return texts[key as keyof typeof texts] || key;
    } else if (locale === "zh-TW") {
      const texts = {
        signInTitle: "登入以下載資料",
        signInSubtitle: "請使用您的帳戶登入",
        email: "郵箱地址",
        password: "密碼",
        signIn: "登入",
        signingIn: "登入中...",
        close: "關閉",
        registerPrompt: "還沒有帳戶？請聯絡我們創建帳戶。",
      };
      return texts[key as keyof typeof texts] || key;
    } else {
      const texts = {
        signInTitle: "Sign in to download materials",
        signInSubtitle: "Please sign in with your account",
        email: "Email address",
        password: "Password",
        signIn: "Sign in",
        signingIn: "Signing in...",
        close: "Close",
        registerPrompt:
          "Don't have an account? Please contact us to create one.",
      };
      return texts[key as keyof typeof texts] || key;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">{getText("close")}</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-2">
                {getText("signInTitle")}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {getText("signInSubtitle")}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {getText("email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 border focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {getText("password")}
                  </label>
                  <input
                    type="password"
                    id="password"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 border focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {error && (
                  <div className="rounded-md bg-red-50 p-3">
                    <div className="text-sm text-red-700">{error}</div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                >
                  {isLoading ? getText("signingIn") : getText("signIn")}
                </button>
              </form>

              <p className="mt-4 text-xs text-gray-500 text-center">
                {getText("registerPrompt")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
