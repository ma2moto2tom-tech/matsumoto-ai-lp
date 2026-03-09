"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Brain, LineChart, Cog, Sparkles } from "lucide-react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#case", label: "Case Study" },
];

const services = [
  {
    icon: Brain,
    title: "AI戦略策定",
    description:
      "御社のビジネス課題を深くヒアリングし、最適なAI活用戦略を策定。無駄な投資を避け、確実に成果を出せるロードマップを作成します。",
  },
  {
    icon: LineChart,
    title: "業務効率化ツール開発",
    description:
      "データ集計、レポート作成、定型業務の自動化など、日々の業務負担を軽減する専用ツールを開発・導入します。",
  },
  {
    icon: Cog,
    title: "AIダッシュボード構築",
    description:
      "複数のデータソースを統合し、経営判断に必要な情報をワンクリックで把握できる専用ダッシュボードを構築します。",
  },
  {
    icon: Sparkles,
    title: "AI活用研修・サポート",
    description:
      "ChatGPTなど生成AIの実践的な活用方法をレクチャー。社内でのAI活用を定着させる継続的なサポートを提供します。",
  },
];

const steps = [
  {
    number: "01",
    title: "ヒアリング",
    description:
      "経営者様の日常業務を詳しくお聞きし、ボトルネックとなっている課題を特定します。",
  },
  {
    number: "02",
    title: "提案",
    description:
      "課題に最適なAIソリューションを具体的にご提案。費用対効果を明確にお伝えします。",
  },
  {
    number: "03",
    title: "開発",
    description:
      "御社専用のツールを開発。シンプルで使いやすいインターフェースを重視します。",
  },
  {
    number: "04",
    title: "導入・運用",
    description:
      "導入後も継続的にサポート。改善要望にも柔軟に対応し、価値を最大化します。",
  },
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <main>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-medium tracking-tight">NEXUS AI</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="#contact"
                className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contact
              </Link>
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/60 mb-8">
            Strategic AI Consulting
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight tracking-tight max-w-4xl mx-auto">
            御社のボトルネックを
            <br />
            AIで解消する
          </h1>
          <p className="mt-8 text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            経営者の「困っている」をヒアリングし、
            <br className="hidden sm:block" />
            最適なAIソリューションを開発・導入します。
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#services"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-foreground font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              サービスを見る
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              無料相談
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-primary-foreground/50 to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                About Us
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight tracking-tight">
                「AIは難しい」を
                <br />
                「AIで楽になった」に
              </h2>
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  NEXUS AIは、中小企業の経営者様が抱える業務課題を、
                  AIの力で解決するコンサルティングサービスです。
                </p>
                <p>
                  私たちは「技術ありき」ではなく「課題ありき」のアプローチを大切にしています。
                  まずは御社の業務を深く理解し、本当に効果のあるソリューションだけをご提案します。
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-muted/50 border border-border">
                <div className="font-serif text-4xl lg:text-5xl text-foreground mb-2">
                  80%
                </div>
                <div className="text-sm text-muted-foreground">
                  業務時間削減（平均）
                </div>
              </div>
              <div className="p-8 bg-muted/50 border border-border">
                <div className="font-serif text-4xl lg:text-5xl text-foreground mb-2">
                  1週間
                </div>
                <div className="text-sm text-muted-foreground">
                  最短導入期間
                </div>
              </div>
              <div className="p-8 bg-muted/50 border border-border">
                <div className="font-serif text-4xl lg:text-5xl text-foreground mb-2">
                  10万〜
                </div>
                <div className="text-sm text-muted-foreground">
                  初期費用（税別）
                </div>
              </div>
              <div className="p-8 bg-muted/50 border border-border">
                <div className="font-serif text-4xl lg:text-5xl text-foreground mb-2">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  オーダーメイド開発
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Services
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight tracking-tight">
              提供サービス
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 lg:p-10 bg-card border border-border hover:border-foreground/20 transition-colors"
              >
                <service.icon className="h-8 w-8 text-foreground mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-medium text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Our Approach
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight tracking-tight">
              導入までの流れ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-serif text-muted/60 mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case" className="py-24 lg:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Case Study
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight tracking-tight">
              導入事例
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="bg-foreground p-8 lg:p-12">
              <div className="aspect-video bg-muted/10 flex items-center justify-center border border-primary-foreground/20">
                <div className="text-center">
                  <div className="text-6xl font-serif text-primary-foreground/20 mb-2">
                    Dashboard
                  </div>
                  <p className="text-sm text-primary-foreground/40">
                    YouTubeチャンネル管理画面
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-foreground text-primary-foreground text-xs font-medium mb-6">
                稼働中
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                YouTubeチャンネル管理ダッシュボード
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                複数のYouTubeチャンネルを運用する中で、各チャンネルの登録者数や
                再生数の確認に毎日30分以上かかっていた課題を解決しました。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="inline-block px-3 py-1 bg-muted text-xs font-medium min-w-[60px] text-center">
                    課題
                  </span>
                  <span className="text-muted-foreground">
                    チャンネル確認に毎日30分
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="inline-block px-3 py-1 bg-muted text-xs font-medium min-w-[60px] text-center">
                    解決
                  </span>
                  <span className="text-muted-foreground">
                    ワンクリックで全体把握
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="inline-block px-3 py-1 bg-muted text-xs font-medium min-w-[60px] text-center">
                    機能
                  </span>
                  <span className="text-muted-foreground">
                    急上昇動画検知・前日比表示・グループ管理
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">
                Contact
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-tight tracking-tight">
                無料相談
              </h2>
              <p className="mt-6 text-primary-foreground/70 leading-relaxed">
                まずはお気軽にご相談ください。
                御社の課題をお聞きし、最適なソリューションをご提案します。
                相談は無料です。
              </p>
              <div className="mt-10 space-y-4 text-primary-foreground/70">
                <p>
                  <span className="text-primary-foreground">運営:</span>{" "}
                  株式会社deLIGHT MEDIA WORKS
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary-foreground flex items-center justify-center">
                    <span className="text-foreground text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-medium text-primary-foreground mb-2">
                    送信完了しました
                  </h3>
                  <p className="text-primary-foreground/70">
                    2営業日以内にご連絡いたします。
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-primary-foreground mb-2"
                  >
                    お名前 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-transparent border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground transition-colors"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-primary-foreground mb-2"
                  >
                    メールアドレス <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-transparent border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm text-primary-foreground mb-2"
                  >
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-transparent border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground transition-colors"
                    placeholder="株式会社〇〇"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-primary-foreground mb-2"
                  >
                    ご相談内容
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-transparent border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground transition-colors resize-none"
                    placeholder="現在お困りのことや、効率化したい業務についてお聞かせください"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-foreground font-medium hover:bg-primary-foreground/90 transition-colors w-full justify-center disabled:opacity-60"
                >
                  {isSubmitting ? "送信中..." : "送信する"}
                  {!isSubmitting && (
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <Link href="/" className="text-xl font-medium tracking-tight">
                NEXUS AI
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                by 株式会社deLIGHT MEDIA WORKS
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 NEXUS AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
