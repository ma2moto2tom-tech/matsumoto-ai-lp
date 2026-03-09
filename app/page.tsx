"use client";

import { useState } from 'react';
import styles from './page.module.css';

export default function LandingPage() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Formspreeにフォーム送信（YOUR_FORM_IDを実際のIDに置き換え）
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true);
            }
        } catch (error) {
            console.error('Form submission error:', error);
        }

        setIsSubmitting(false);
    };

    return (
        <div className={styles.page}>
            {/* Navigation */}
            <nav className={styles.nav}>
                <div className={styles.navContainer}>
                    <div className={styles.logo}>
                        <span className={styles.logoText}>deLIGHT MEDIA WORKS</span>
                    </div>
                    <a href="#contact" className={styles.navCta}>無料相談</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <img
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
                        alt="Office"
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <p className={styles.heroLabel}>AI × 業務効率化</p>
                    <h1 className={styles.heroTitle}>
                        御社のボトルネックを<br />
                        AIで解消します
                    </h1>
                    <p className={styles.heroDescription}>
                        経営者の「困っている」をヒアリングし、<br />
                        最適なAIソリューションを開発・導入
                    </p>
                    <a href="#contact" className={styles.primaryButton}>無料相談を予約する</a>
                </div>
            </section>

            {/* Problem Section */}
            <section className={styles.problem}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>こんなお悩みありませんか？</h2>
                    <div className={styles.problemGrid}>
                        <div className={styles.problemCard}>
                            <div className={styles.problemImageWrapper}>
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
                                    alt="データ分析"
                                    className={styles.problemImage}
                                />
                            </div>
                            <h3>データ集計に時間がかかる</h3>
                            <p>毎日のレポート作成や数値管理に追われていませんか？</p>
                        </div>
                        <div className={styles.problemCard}>
                            <div className={styles.problemImageWrapper}>
                                <img
                                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80"
                                    alt="繰り返し作業"
                                    className={styles.problemImage}
                                />
                            </div>
                            <h3>同じ作業の繰り返し</h3>
                            <p>定型業務に時間を取られ、本来の仕事に集中できない</p>
                        </div>
                        <div className={styles.problemCard}>
                            <div className={styles.problemImageWrapper}>
                                <img
                                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80"
                                    alt="AI活用"
                                    className={styles.problemImage}
                                />
                            </div>
                            <h3>AIを使いたいけど...</h3>
                            <p>何から始めればいいか分からない、難しそう</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className={styles.solution}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>3つのステップで課題を解決</h2>
                    <div className={styles.processSteps}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>01</div>
                            <h3>ヒアリング</h3>
                            <p>社長の日常業務を詳しくお聞きし、<br />ボトルネックを特定します</p>
                        </div>
                        <div className={styles.stepLine}></div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>02</div>
                            <h3>提案</h3>
                            <p>課題に最適なAIソリューションを<br />具体的にご提案します</p>
                        </div>
                        <div className={styles.stepLine}></div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>03</div>
                            <h3>開発・導入</h3>
                            <p>御社専用のツールを開発し、<br />運用までサポートします</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Section */}
            <section id="case" className={styles.caseStudy}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>導入事例</h2>
                    <div className={styles.caseCard}>
                        <div className={styles.caseImage}>
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                                alt="Dashboard Analytics"
                                className={styles.caseImg}
                            />
                            <div className={styles.caseBadge}>稼働中</div>
                        </div>
                        <div className={styles.caseContent}>
                            <div className={styles.caseLabel}>A社 様</div>
                            <h3 className={styles.caseTitle}>YouTubeチャンネル管理ダッシュボード</h3>
                            <p className={styles.caseDescription}>
                                複数のYouTubeチャンネルを運用する中で、各チャンネルの登録者数や
                                再生数の確認に時間がかかっていた課題を解決しました。
                            </p>
                            <div className={styles.caseResults}>
                                <div className={styles.resultItem}>
                                    <span className={styles.resultLabel}>課題</span>
                                    <span className={styles.resultValue}>チャンネル確認に毎日30分</span>
                                </div>
                                <div className={styles.resultItem}>
                                    <span className={styles.resultLabel}>解決</span>
                                    <span className={styles.resultValue}>ワンクリックで全体把握</span>
                                </div>
                                <div className={styles.resultItem}>
                                    <span className={styles.resultLabel}>機能</span>
                                    <span className={styles.resultValue}>急上昇動画・前日比表示</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className={styles.pricing}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>料金プラン</h2>
                    <p className={styles.pricingSubtitle}>まずは無料相談から。御社の課題に合わせてお見積りします。</p>
                    <div className={styles.pricingGrid}>
                        <div className={styles.pricingCard}>
                            <div className={styles.pricingHeader}>
                                <h3>ライト</h3>
                                <p className={styles.pricingTarget}>小規模な自動化</p>
                            </div>
                            <div className={styles.pricingPrice}>
                                <span className={styles.priceAmount}>10万円</span>
                                <span className={styles.pricePeriod}>〜</span>
                            </div>
                            <ul className={styles.pricingFeatures}>
                                <li>単一業務の自動化</li>
                                <li>既存ツール連携</li>
                                <li>導入サポート1回</li>
                            </ul>
                            <a href="#contact" className={styles.pricingButton}>相談する</a>
                        </div>
                        <div className={`${styles.pricingCard} ${styles.pricingCardPopular}`}>
                            <div className={styles.popularBadge}>おすすめ</div>
                            <div className={styles.pricingHeader}>
                                <h3>スタンダード</h3>
                                <p className={styles.pricingTarget}>本格的なAI導入</p>
                            </div>
                            <div className={styles.pricingPrice}>
                                <span className={styles.priceAmount}>30万円</span>
                                <span className={styles.pricePeriod}>〜</span>
                            </div>
                            <ul className={styles.pricingFeatures}>
                                <li>専用ダッシュボード開発</li>
                                <li>複数業務の自動化</li>
                                <li>月1回の改善ミーティング</li>
                                <li>3ヶ月サポート付き</li>
                            </ul>
                            <a href="#contact" className={styles.pricingButtonPrimary}>相談する</a>
                        </div>
                        <div className={styles.pricingCard}>
                            <div className={styles.pricingHeader}>
                                <h3>エンタープライズ</h3>
                                <p className={styles.pricingTarget}>全社的なDX推進</p>
                            </div>
                            <div className={styles.pricingPrice}>
                                <span className={styles.priceAmount}>要相談</span>
                            </div>
                            <ul className={styles.pricingFeatures}>
                                <li>オーダーメイド開発</li>
                                <li>社内研修実施</li>
                                <li>継続的な運用支援</li>
                                <li>専属サポート</li>
                            </ul>
                            <a href="#contact" className={styles.pricingButton}>相談する</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profile Section */}
            <section className={styles.profile}>
                <div className={styles.container}>
                    <div className={styles.profileContent}>
                        <div className={styles.profileLogo}>
                            <span className={styles.profileLogoText}>dLMW</span>
                        </div>
                        <div className={styles.profileText}>
                            <h3>株式会社deLIGHT MEDIA WORKS</h3>
                            <p className={styles.profileRole}>AI ソリューション事業</p>
                            <p className={styles.profileBio}>
                                「AIは難しい」を「AIで楽になった」に変えることをミッションに、
                                中小企業の業務効率化を支援しています。
                                御社の「当たり前」を一緒に見直し、最適なソリューションをご提案します。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={styles.contact}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>無料相談</h2>
                    <p className={styles.contactSubtitle}>
                        まずはお気軽にご相談ください。<br />
                        御社の課題をお聞きし、最適なソリューションをご提案します。
                    </p>
                    {submitted ? (
                        <div className={styles.successMessage}>
                            <div className={styles.successIcon}>✓</div>
                            <h3>送信完了しました</h3>
                            <p>2営業日以内にご連絡いたします。</p>
                        </div>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">お名前 <span className={styles.required}>*</span></label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="山田 太郎"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="company">会社名</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        placeholder="株式会社〇〇"
                                    />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">メールアドレス <span className={styles.required}>*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="example@company.com"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">ご相談内容</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="現在お困りのことや、効率化したい業務についてお聞かせください"
                                />
                            </div>
                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? '送信中...' : '無料相談を申し込む'}
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footerContent}>
                        <div className={styles.footerLogo}>株式会社deLIGHT MEDIA WORKS</div>
                        <p className={styles.footerCopy}>© 2026 deLIGHT MEDIA WORKS. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
