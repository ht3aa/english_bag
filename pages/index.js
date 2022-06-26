import homeStyles from "../styles/Home.module.css";
import Image from "next/image";
import { db } from "../data/db";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const parts = Object.keys(db);

  return (
    <>
      <header id="home" className={homeStyles.hero}>
        <Head>
          <meta
            name="description"
            content="Bag that contains files and videos about english language which will simplified and make it easy for you to understand the grammar of English language"
          />

          <title>English Bag</title>
        </Head>
        <div className={homeStyles.overlayer}>
          <div className={homeStyles.mainContent}>
            <h1>English Language</h1>
            <p>
              The English language is an Indo-European language in the West
              Germanic language group. Modern English is widely considered to be
              the lingua franca of the world and is the standard language in a
              wide variety of fields, including computer coding, international
              business, and higher education.
            </p>
            <a href="#files">
              <button>
                <h5>Want to learn?</h5>
              </button>
            </a>
          </div>
        </div>
        <svg style={{ width: "44px", height: "44px" }} viewBox="0 0 24 24">
          <path
            fill="black"
            d="M7.03 13.92H11.03V5L13.04 4.97V13.92H17.03L12.03 18.92Z"
          />
        </svg>
      </header>
      <div id="history" className={homeStyles.divider}>
        <h2>History</h2>
      </div>
      <section className={homeStyles.subContentContainer}>
        <div className={homeStyles.subContent}>
          <h3>why English?</h3>
          <p>
            The earliest form of English is called Old English or Anglo-Saxon
            (c. year 550_1066). Old English developed from a set of West
            Germanic dialects, often grouped as Anglo-Frisian or North Sea
            Germanic, and originally spoken along the coasts of Frisia, Lower
            Saxony and southern Jutland by Germanic peoples known to the
            historical record as the Angles, Saxons, and Jutes. From the 5th
            century, the Anglo-Saxons settled Britain as the Roman economy and
            administration collapsed. By the 7th century, the Germanic language
            of the Anglo-Saxons became dominant in Britain, replacing the
            languages of Roman Britain (43_409): Common Brittonic, a Celtic
            language, and Latin, brought to Britain by the Roman occupation.
            England and English (originally Ænglaland and Ænglisc) are named
            after the Angles.
          </p>
        </div>
        <Image
          src="/america_flag.png"
          width={400}
          height={241}
          alt="American and British flags"
        />
      </section>
      <p className={homeStyles.description}>
        Old English was divided into four dialects: the Anglian dialects
        (Mercian and Northumbrian) and the Saxon dialects, Kentish and West
        Saxon. Through the educational reforms of King Alfred in the 9th century
        and the influence of the kingdom of Wessex, the West Saxon dialect
        became the standard written variety. The epic poem Beowulf is written in
        West Saxon, and the earliest English poem, Cædmon's Hymn, is written in
        Northumbrian. Modern English developed mainly from Mercian, but the
        Scots language developed from Northumbrian. A few short inscriptions
        from the early period of Old English were written using a runic script.
        By the 6th century, a Latin alphabet was adopted, written with
        half-uncial letterforms. It included the runic letters wynn ⟨ƿ⟩ and
        thorn ⟨þ⟩, and the modified Latin letters eth ⟨ð⟩, and ash ⟨æ⟩.
        <a href="https://en.wikipedia.org/wiki/English_language">
          more details
        </a>
      </p>
      <div id="headwayBook" className={homeStyles.divider}>
        <h2>headway book</h2>
        <a href="/headwayBook.pdf" download>
          Download
        </a>
      </div>
      <section className={homeStyles.subContentContainer}>
        <div className={homeStyles.subContent}>
          <h3>why Headway beginner student book?</h3>
          <p>
            New Headway Beginner is the first book in the New Headway series;
            throughout its 14 diverse units, a lot is covered including grammar,
            vocabulary, writing, and speaking activities. Every unit is
            approximately 8 pages long and the activities provided in each
            lesson are easy to follow and relevant to the students level. The
            topics throughout the book deal with things like food,
            likes/dislikes, asking questions, life at home, travel, and several
            other basic level subjects; the layout of each unit is simple and
            easy to follow, but the book is heavy on text and it may intimidate
            or even bore some beginner level students.
          </p>
        </div>
        <Image
          src="/headway.png"
          width={400}
          height={200}
          alt="American and British flags"
        />
      </section>
      <main id="files" className={homeStyles.mainContainer}>
        {parts.map((part, index) => {
          return (
            <div key={index}>
              <div className={homeStyles.cardContainer}>
                {db[part].map((card) => {
                  return (
                    <div key={card.id} className={homeStyles.card}>
                      <div className={homeStyles.cardImg}>
                        <div className={homeStyles.cardOverlay}>
                          <h4>{card.lesson_number}</h4>
                        </div>
                      </div>
                      <div className={homeStyles.cardContent}>
                        <h4>{card.lesson_name}</h4>
                        <p>{card.description}</p>
                        <Link
                          href={`/lecture?imgs=${card.file_imgs}&audio=${card.audio_path}&file=${card.file_path}`}
                          passHref
                        >
                          <button>Start lesson</button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>
      <div id="aboutUs" className={homeStyles.divider}>
        <h2>About us</h2>
      </div>
      <section className={homeStyles.aboutUs}>
        <h3>who? and why?</h3>
        <p>
          I am Mustafa Ghulam Sayed, a student at Al-Imam Al-Kadhim University,
          Department of Technology Engineering the computer. My goal of this
          site is to facilitate and simplify the English language on The reader
          by providing simplified parts of the book, Hedway Plus
        </p>
      </section>
      <footer>
        <a aria-label="Department image" href="/department_logo.png">
          <Image
            src="/department_logo.png"
            width="60"
            height="60"
            alt="department logo"
          />
        </a>
        <p>&copy; Done with the help of BIT team</p>
      </footer>
    </>
  );
}
