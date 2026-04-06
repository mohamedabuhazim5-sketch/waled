import { useEffect, useMemo, useState } from "react";
import "./App.css";

const SITE_PASSWORD = "170526";
const SPECIAL_DATE = "2026-05-17T00:00:00";

function TypingText({ text, speed = 35, className = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className={className}>{displayed}</p>;
}

export default function App() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [counter, setCounter] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const content = useMemo(
    () => ({
      heroName: "وليد",
      heroSub: "حبيبي ونور عيني ❤️",
      heroText:
        "إنت بجد حبيتك حب ولا في الخيال، أنا بجد بحبك، وإنت كل حاجة حلوة ليا، ونور قلبي وروحي وكل دنيتي. ❤️",
      meetTitle: "تاريخنا المميز 🤍",
      meetDate: "17/5/2026",
      timerTitle: "من تاريخنا المميز ❤️",
      timerText:
        "من يوم 17/5/2026 وإنت بقيت أقرب حد لقلبي، وكل لحظة معاك ليها معنى مختلف وجميل، وبحبك أكتر من أي كلام ممكن يوصف. 🫂❤️",
      cuteText: "يا أجمل وليد في الدنيا… الموقع ده معمول ليك إنت وبس 💙",
      footerText: "بحبك يا وليد ❤️",
    }),
    []
  );

  const loveParagraphs = useMemo(
    () => [
      "إنت بجد حبيتك حب ولا في الخيال، أنا بجد بحبك ❤ إنت حبيبي ونور عيني، وإنت كل شيء جميل في حياتي، وإنت النبض اللي بيحيي قلبي، والروح اللي ساكنة جوايا. 🥰",
      "أحبك حبًا ماله حد، أحبك رغم هذا البعد، أحبك موت يا غالي 🌍😚 ومن الصعب جدًا تطرد حب استعمر قلبك.",
      "أفتخر إنك حبيبي 🌍♥️ وإنك الحب الحقيقي، ويكفي إني عند ذكرك بنسى أحزاني وضيقي. 🥹♥️",
      "لقد أصبح حبك مثل الدماء الحمراء يسير في جسدي بكل هدوء، ويعانق ويلامس كل ما هو في طريقه.",
      "أنت راحتي من بين كل البشر، أنت الأمان. 🫂❣️😘",
      "أحبك بعدد النجوم في السماء ⭐❤ وعدد النبضات اللي بتنطق باسمك جوا قلبي. 🫶🏻🥹♥️",
      "بحبك يا روحي 🔥❤ إنت كل حاجة حلوة ليا ♥️🥹🌍",
    ],
    []
  );

  const memoryCards = useMemo(
    () => [
      {
        id: 1,
        title: "تاريخنا المميز",
        image: "/1.jpg",
        date: "17/5/2026",
        text: "اليوم ده بقى محفور في قلبي، لأنه اليوم اللي بقى ليه معنى أجمل بوجودك. 🤍",
      },
      {
        id: 2,
        title: "نور عيني",
        image: "/2.jpg",
        date: "ذكرى مميزة",
        text: "إنت حبيبي ونور عيني، ووجودك لوحده كفاية يخلّي الدنيا كلها أهدى وأحلى. 💙",
      },
      {
        id: 3,
        title: "أنت الأمان",
        image: "/3.jpg",
        date: "لحظة بحبها",
        text: "أنت راحتي من بين كل البشر، وأنت المكان اللي قلبي بيهدى فيه. ❤️",
      },
      {
        id: 4,
        title: "حب ولا في الخيال",
        image: "/4.jpg",
        date: "أجمل شعور",
        text: "حبك جوايا أكبر من أي كلام، وأصدق من أي وصف، ومفيش زيه في الدنيا. 🌍",
      },
    ],
    []
  );

  const timelineItems = useMemo(
    () => [
      {
        title: "بداية الحكاية",
        date: "17/5/2026",
        text: "اليوم اللي بقى مميز في قلبي جدًا، ومنه بدأت أجمل مشاعري تجاهك.",
      },
      {
        title: "أول شعور مختلف",
        date: "بداية جميلة",
        text: "اليوم اللي حسيت فيه إنك مش شبه حد، وإن ليك مكان مختلف جوايا.",
      },
      {
        title: "أنت الأمان",
        date: "كل يوم",
        text: "كل يوم بيعدي بيأكدلي إن وجودك في حياتي راحة وطمأنينة.",
      },
      {
        title: "حب بيكبر",
        date: "ومكملين",
        text: "وكل يوم بحبك أكتر، وبتأكد إنك أجمل حاجة حصلتلي.",
      },
    ],
    []
  );

  const cuteFacts = useMemo(
    () => [
      { title: "اسم حبيبي", value: "وليد" },
      { title: "تاريخ مميز", value: "17/5/2026" },
      { title: "مكانه", value: "قلبي كله" },
      { title: "مستوى الحب", value: "∞" },
    ],
    []
  );

  const reasons = useMemo(
    () => ["حبك", "أمانك", "قربك", "كلامك", "اهتمامك", "وجودك"],
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const startDate = new Date(SPECIAL_DATE);

    const updateCounter = () => {
      const now = new Date().getTime();
      const start = startDate.getTime();
      const difference = now - start;

      if (difference <= 0) {
        setCounter({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCounter({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isUnlocked) return;

    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    playAudio();
  }, [isUnlocked]);

  const handleUnlock = async (e) => {
    e.preventDefault();

    if (enteredPassword === SITE_PASSWORD) {
      setIsUnlocked(true);
      setError("");

      setTimeout(async () => {
        const audio = document.getElementById("loveAudio");
        if (!audio) return;
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }, 250);
    } else {
      setError("الباسورد غلط يا روحي");
    }
  };

  const toggleMusic = async () => {
    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  if (showLoader) {
    return (
      <div className="loader-page" dir="rtl">
        <div className="loader-hearts">
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
        </div>
        <div className="loader-circle"></div>
        <h1>جارِ تجهيز أجمل مفاجأة لوليد 💙</h1>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="password-page" dir="rtl">
        <audio id="loveAudio" loop preload="auto">
          <source src="/love.mp3" type="audio/mpeg" />
        </audio>

        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>

        <div className="floating-hearts" aria-hidden="true">
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
        </div>

        <div className="password-card glass">
          <div className="password-top-image">
            <img src="/profile.jpg" alt="وليد" />
            <div className="password-image-overlay"></div>
          </div>

          <div className="lock-icon">🔐</div>
          <div className="cute-badge">💙 خاص بوليد</div>

          <h1>اكتب كلمة السر يا وليد</h1>

          <p className="password-subtext">
            الموقع ده معمول مخصوص ليك، ومش هيفتح غير لما تكتب كلمة السر ❤️
          </p>

          <form onSubmit={handleUnlock} className="password-form">
            <input
              type="password"
              placeholder="اكتب كلمة السر هنا"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
            />
            <button type="submit">دخول للموقع ❤️</button>
          </form>

          {error && <div className="error-text">{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className="page" dir="rtl">
      <audio id="loveAudio" loop preload="auto">
        <source src="/love.mp3" type="audio/mpeg" />
      </audio>

      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <div className="floating-hearts" aria-hidden="true">
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
      </div>

      <main className="container">
        <section className="hero-banner glass">
          <div className="hero-banner-text">
            <span className="small-badge">✨ نسخة معمولالك بحب كبير</span>
            <h1>
              {content.heroName}
              <span>{content.heroSub}</span>
            </h1>
            <TypingText text={content.cuteText} className="typing-line" />
            <p>{content.heroText}</p>

            <div className="top-actions">
              <button className="btn btn-primary" onClick={toggleMusic}>
                {isPlaying ? "إيقاف الأغنية" : "تشغيل الأغنية"}
              </button>

              <button
                className="btn btn-secondary"
                onClick={() =>
                  document
                    .getElementById("counterSection")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                انزل تحت
              </button>
            </div>
          </div>

          <div className="hero-banner-image">
            <img src="/profile.jpg" alt="وليد" />
            <div className="hero-banner-overlay"></div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card glass">
            <strong>{counter.days}</strong>
            <span>يوم معاك</span>
          </div>
          <div className="stat-card glass cute-counter-card">
            <div className="pulse-ring"></div>
            <strong>{counter.hours}</strong>
            <span>ساعة حب</span>
          </div>
          <div className="stat-card glass">
            <strong>17/5</strong>
            <span>تاريخ مميز</span>
          </div>
          <div className="stat-card glass">
            <strong>∞</strong>
            <span>حب</span>
          </div>
        </section>

        <section className="cute-facts-grid">
          {cuteFacts.map((item, index) => (
            <div className="cute-fact-card glass" key={index}>
              <h4>{item.title}</h4>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="full-cover-section glass">
          <div className="full-cover-image">
            <img src="/profile.jpg" alt="وليد" />
            <div className="full-cover-overlay"></div>
          </div>

          <div className="full-cover-content">
            <div className="scene-pill">{content.meetTitle}</div>
            <div className="scene-date">{content.meetDate}</div>
            <h2>{content.heroName}</h2>
            <h3>{content.heroSub}</h3>
            <p>{content.heroText}</p>
          </div>
        </section>

        <section className="huge-counter-section glass" id="counterSection">
          <span className="small-badge">⏳ عداد الحب</span>
          <h2>{content.timerTitle}</h2>
          <p>{content.timerText}</p>

          <div className="huge-counter-grid">
            <div className="huge-counter-box animated-counter">
              <strong>{counter.days}</strong>
              <span>يوم</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.hours}</strong>
              <span>ساعة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.minutes}</strong>
              <span>دقيقة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.seconds}</strong>
              <span>ثانية</span>
            </div>
          </div>

          <div className="music-mini-bar giant-music-bar">
            <div className="music-mini-left">
              <div className={`disc ${isPlaying ? "spin" : ""}`}>🎵</div>
              <div>
                <strong>أغنيتنا</strong>
                <small>هتشتغل لو المتصفح سمح</small>
              </div>
            </div>

            <button className="mini-play-btn" onClick={toggleMusic}>
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </section>

        <section className="wide-message glass">
          <span className="small-badge">💌 كلام من القلب</span>
          <h2>رسالة مخصوص لوليد</h2>
          {loveParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <section className="love-columns">
          <div className="love-column-card glass">
            <h3>حاجات بحبها فيك</h3>
            <ul>
              {reasons.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="love-column-card glass">
            <h3>أنا لما بكون معاك</h3>
            <ul>
              <li>مرتاحه</li>
              <li>مبسوطه</li>
              <li>مطمّنة</li>
              <li>بحس بالأمان</li>
              <li>بضحك من قلبي</li>
              <li>بحب الدنيا أكتر</li>
            </ul>
          </div>
        </section>

        <section className="timeline-section glass">
          <div className="section-head">
            <h3>Timeline الحكاية</h3>
            <p>ترتيب بسيط ولطيف للحظات اللي بينا</p>
          </div>

          <div className="timeline-list">
            {timelineItems.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <small>{item.date}</small>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reels-section glass">
          <div className="section-head slider-head">
            <div>
              <h3>الكروت المتحركة</h3>
              <p>كل صورة تحتها الكلام اللي يخصها بشكل لطيف ومتحرك</p>
            </div>

            <div className="slider-buttons">
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: 360, behavior: "smooth" });
                }}
              >
                ←
              </button>
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: -360, behavior: "smooth" });
                }}
              >
                →
              </button>
            </div>
          </div>

          <div className="cards-slider" id="cardsSlider">
            {memoryCards.map((card, index) => (
              <button
                key={card.id}
                className="animated-text-card slider-card"
                onClick={() => setSelectedCard(card)}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="animated-card-image">
                  <img src={card.image} alt={card.title} />
                </div>

                <div className="animated-card-body">
                  <small>{card.date}</small>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="big-quotes-section glass">
          <div className="quote-box">
            “أفتخر إنك حبيبي، وإنك الحب الحقيقي، وعند ذكرك بنسى أحزاني كلها ❤️”
          </div>
          <div className="quote-box">
            “أنت راحتي من بين كل البشر، وأنت الأمان 🤍”
          </div>
          <div className="quote-box">
            “إنت كل حاجة حلوة ليا، وأجمل حاجة حصلتلي 🌍”
          </div>
        </section>

        <section className="gallery-grid-section glass">
          <div className="section-head">
            <h3>جاليري أكبر</h3>
            <p>صور أكتر بشكل أنضف وأوسع</p>
          </div>

          <div className="big-gallery-grid">
            {memoryCards.map((item) => (
              <button
                key={item.id}
                className="big-gallery-card"
                onClick={() => setSelectedCard(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="big-gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="extra-love-section glass">
          <div className="extra-love-card glass">
            <h3>وجودك فرق</h3>
            <p>وجودك خلّى كل حاجة في حياتي أهدى وأجمل وأخف ❤️</p>
          </div>
          <div className="extra-love-card glass">
            <h3>أنت الأمان</h3>
            <p>وسط كل الناس، قلبي بيهدى ويطمن لما يكون معاك 💙</p>
          </div>
          <div className="extra-love-card glass">
            <h3>حبيبي للأبد</h3>
            <p>بحبك حب كبير أوي، ومفيش كلام يكفي يوصف اللي جوايا 🌷</p>
          </div>
        </section>

        <section className="final-cute-section glass">
          <h2>وفي الآخر…</h2>
          <p>بحبك يا وليد، وإنت فعلًا كل حاجة حلوة ليا ❤️</p>
        </section>

        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </main>

      {selectedCard && (
        <div className="modal" onClick={() => setSelectedCard(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCard(null)}>
              ×
            </button>

            <div className="modal-image">
              <img src={selectedCard.image} alt={selectedCard.title} />
            </div>

            <div className="modal-content">
              <span className="modal-chip">💌 ذكرى مختارة</span>
              <small>{selectedCard.date || "ذكرى جميلة"}</small>
              <h3>{selectedCard.title}</h3>
              <p>{selectedCard.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}