import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Star, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const chapters = [
  {
    title: "L'origine de la création",
    paragraphs: [
      "Depuis toujours, la création occupe une place essentielle dans ma vie. J'ai toujours aimé imaginer de nouveaux projets, réfléchir à la manière de leur donner forme, expérimenter, apprendre et, surtout, partager le résultat avec les autres. Donner vie à une idée, la voir évoluer entre mes mains et devenir progressivement quelque chose de concret est une source de satisfaction qui m'accompagne depuis longtemps.",
    ],
  },
  {
    title: "La découverte du cosplay",
    paragraphs: [
      "C'est en 2022 que je découvre véritablement l'univers du cosplay. Très rapidement, cette pratique devient bien plus qu'une simple activité créative. J'y trouve un espace d'expression particulièrement riche, dans lequel l'imagination, le travail manuel, la patience et la passion se rencontrent. Le cosplay me permet de réunir tout ce que j'aime : concevoir, fabriquer, interpréter un univers, relever des défis techniques et transformer une idée en une création réelle.",
      "Chaque costume représente alors une nouvelle aventure. Avant même de commencer sa fabrication, il faut observer, comprendre et imaginer. Il ne s'agit pas seulement de reproduire une tenue, mais de saisir l'identité du personnage, son histoire, son énergie et les détails qui le rendent reconnaissable. Vient ensuite tout le travail de conception : réfléchir aux volumes, aux matières, aux proportions, aux couleurs, aux accessoires et à la manière dont chaque élément pourra être adapté à la personne qui portera le costume.",
      "Je réalise moi-même mes costumes ainsi que leurs accessoires. Chaque projet devient ainsi une occasion d'explorer de nouvelles idées et de développer davantage mon savoir-faire. Je découvre progressivement qu'il n'existe jamais une seule manière de créer. Chaque tenue demande une réflexion différente, chaque accessoire présente ses propres contraintes et chaque détail peut devenir un nouveau défi à relever.",
    ],
  },
  {
    title: "Une démarche d'apprentissage",
    paragraphs: [
      "Certaines créations exigent de recommencer, de modifier une méthode ou d'imaginer une solution entièrement nouvelle. Ce processus fait pleinement partie de ma démarche. Il m'apprend à être patiente, attentive et persévérante. Il m'encourage également à sortir de ma zone de confort et à ne pas considérer les difficultés comme des obstacles, mais comme des occasions d'apprendre.",
      "Au fil des projets, je développe ma créativité, ma précision et ma capacité à transformer une inspiration en une création concrète. Chaque costume m'apporte une nouvelle expérience. Même lorsqu'une technique semble acquise, une nouvelle idée vient souvent remettre en question mes habitudes et me pousser à aller plus loin. C'est cette évolution constante qui rend le cosplay aussi passionnant à mes yeux.",
    ],
  },
  {
    title: "Le partage sur les réseaux sociaux",
    paragraphs: [
      "En 2024, je décide de franchir une nouvelle étape en me lançant officiellement sur les réseaux sociaux. Jusqu'alors, la création était avant tout une passion personnelle. En partageant mon travail, je souhaite ouvrir les portes de mon univers, montrer l'évolution de mes projets et faire découvrir les différentes étapes qui se cachent derrière un costume terminé.",
      "Cette présence sur les réseaux sociaux représente pour moi bien plus qu'une simple vitrine. Elle me permet de raconter l'histoire de mes créations, de montrer les recherches, les essais, les ajustements et les heures de travail nécessaires pour donner vie à une idée. Elle me permet aussi de partager les réussites, mais également les défis qui font partie de chaque projet.",
      "Présenter mon travail aux autres m'aide à porter un regard nouveau sur mes créations. Les échanges, les réactions et les rencontres nourrissent ma motivation et renforcent mon envie de continuer à progresser. Chaque partage devient une manière de transmettre ma passion, d'encourager la créativité et de montrer que derrière chaque costume se trouvent du temps, de la réflexion, de la patience et beaucoup d'implication.",
    ],
  },
  {
    title: "Le cosplay comme expression",
    paragraphs: [
      "Le cosplay est ainsi devenu pour moi bien plus qu'un hobby. Il représente un véritable moyen d'expression. À travers chaque costume, je peux explorer un nouvel univers, raconter une histoire et faire naître une émotion. Il me permet également d'exprimer une partie de ma personnalité et de mon imagination, tout en rendant hommage aux personnages et aux œuvres qui inspirent mes projets.",
      "Cette passion me pousse continuellement à apprendre. Aucun costume ne ressemble véritablement au précédent, car chacun possède ses propres particularités. Chaque nouvelle création m'oblige à réfléchir différemment, à chercher des solutions adaptées et à affiner ma manière de travailler. Cette diversité nourrit ma curiosité et entretient mon envie de découvrir de nouvelles possibilités.",
    ],
  },
  {
    title: "Naissance de KAHASOO",
    paragraphs: [
      "Avec le temps, une évidence s'impose : je ne souhaite plus seulement créer pour moi-même. Je veux mettre cette passion, cette créativité et ce savoir-faire au service des autres. Je veux permettre à chacun de voir prendre vie un costume qui lui ressemble et dans lequel il pourra se sentir pleinement lui-même.",
      "C'est de cette volonté qu'est née KAHASOO.",
      "La création de mon entreprise représente la continuité naturelle de mon parcours. KAHASOO est née de mon amour pour le cosplay, mais aussi de mon désir d'accompagner chaque personne dans la réalisation du costume dont elle rêve. À travers cette entreprise, je souhaite proposer des créations originales, personnalisées et conçues avec une véritable attention portée aux détails.",
    ],
  },
  {
    title: "Une démarche sur mesure et personnalisée",
    paragraphs: [
      "Mon objectif n'est pas de produire des costumes impersonnels ou simplement standardisés. Je veux que chaque création possède sa propre identité. Un costume doit bien sûr évoquer un personnage ou un univers, mais il doit également correspondre à la personne qui le porte. Sa morphologie, ses préférences, sa personnalité, ses attentes et la manière dont elle souhaite incarner son personnage sont autant d'éléments essentiels à prendre en compte.",
      "Pour moi, la personnalisation ne consiste pas uniquement à adapter des mesures. Elle repose sur une véritable écoute. Derrière chaque demande se trouve une envie particulière, parfois un projet imaginé depuis longtemps, un personnage auquel la personne est attachée ou un rêve qu'elle souhaite enfin concrétiser. Comprendre cette histoire est indispensable pour créer une pièce qui ait du sens.",
      "Chaque projet commence donc par un échange. Il s'agit de découvrir l'univers souhaité, de comprendre les besoins et de définir les éléments les plus importants du costume. Certaines personnes recherchent une reproduction aussi fidèle que possible, tandis que d'autres souhaitent une interprétation plus personnelle. Certaines accordent une importance particulière au confort, à la mobilité ou à la présence visuelle de la tenue. Mon rôle est de prendre en compte l'ensemble de ces attentes afin de construire un projet cohérent.",
    ],
  },
  {
    title: "L'art du costume vivant",
    paragraphs: [
      "La conception devient ensuite un dialogue entre l'idée d'origine et la personne qui portera la création. Je réfléchis à la manière de préserver l'identité du personnage tout en rendant le costume unique. Chaque choix participe au résultat final : les formes, les proportions, les finitions, les accessoires et les détails qui donneront toute sa personnalité à l'ensemble.",
      "Cette attention est au cœur de KAHASOO. Je tiens à ce que chaque création soit pensée avec soin, réalisée avec implication et porte une véritable intention. Les détails ne sont jamais de simples ajouts. Ils contribuent à raconter l'histoire du costume et à renforcer l'émotion qu'il transmet.",
      "Je considère qu'un costume prend réellement vie lorsqu'il est porté. C'est à ce moment-là qu'il cesse d'être uniquement un objet fabriqué pour devenir une expérience. Il accompagne une personne, lui permet d'incarner un personnage, de s'approprier un univers et parfois même de révéler une nouvelle facette d'elle-même.",
      "C'est pourquoi je souhaite créer des costumes dans lesquels chacun puisse se sentir à la fois à l'aise, confiant et fier. Une création réussie ne se mesure pas seulement à son apparence. Elle se reconnaît aussi à l'émotion qu'elle procure à la personne qui la porte.",
    ],
  },
  {
    title: "La vision de KAHASOO",
    paragraphs: [
      "À travers KAHASOO, je veux défendre une vision humaine et personnelle de la création. Chaque projet est unique, parce que chaque personne l'est également. Deux demandes inspirées d'un même personnage peuvent raconter des histoires très différentes. C'est cette singularité qui m'intéresse et qui nourrit mon travail.",
      "Être la créatrice et la gérante de KAHASOO signifie porter plusieurs responsabilités à la fois. Je suis à l'origine des idées, de la conception et de la réalisation, mais je suis également la personne qui échange, conseille et accompagne chaque client tout au long de son projet. Cette proximité est essentielle pour moi, car elle permet de construire une relation fondée sur la confiance et la compréhension.",
      "Je souhaite que chaque personne qui fait appel à KAHASOO se sente véritablement écoutée. La création d'un costume sur mesure est une aventure commune. Elle demande de la communication, de la confiance et une vision partagée. Mon rôle est de guider cette aventure tout en restant fidèle aux attentes et à l'identité de la personne.",
    ],
  },
  {
    title: "Une passion devenue vocation",
    paragraphs: [
      "KAHASOO est donc bien plus qu'un projet professionnel. L'entreprise représente l'aboutissement d'une passion devenue vocation. Elle rassemble mon envie de créer, mon besoin d'apprendre, mon goût du défi et mon désir de faire plaisir aux autres à travers des réalisations qui ont du sens.",
      "Chaque nouveau costume est une page blanche. Il commence par une idée, une image, une envie ou parfois simplement une émotion. Progressivement, cette inspiration se transforme en projet, puis en création. Voir le costume prendre forme est toujours un moment particulier, mais le plus important reste de le découvrir porté par la personne pour laquelle il a été imaginé.",
      "C'est dans cet instant que tout le travail accompli prend son sens : lorsqu'une personne reconnaît dans la création le costume qu'elle avait imaginé, qu'elle se l'approprie et qu'elle peut enfin donner vie à son personnage.",
    ],
  },
  {
    title: "L'avenir de KAHASOO",
    paragraphs: [
      "Aujourd'hui, je continue à faire évoluer KAHASOO avec la même curiosité et la même passion qui m'animaient lors de mes premiers projets de cosplay. Chaque création nourrit la suivante. Chaque difficulté m'aide à progresser. Chaque rencontre enrichit ma vision du métier.",
      "Mon ambition est de continuer à développer mon savoir-faire sans jamais perdre l'essence de mon projet : créer avec passion, écouter avec attention et concevoir des costumes qui racontent une véritable histoire.",
      "Parce qu'un costume ne devrait pas seulement être beau.",
      "Il devrait transmettre une émotion, refléter une personnalité et permettre à la personne qui le porte de vivre pleinement son rêve.",
      "KAHASOO est née de cette conviction : chaque passion mérite de prendre vie, et chaque costume mérite d'être aussi unique que la personne qui le porte.",
    ],
  },
];

const stats = [
  { icon: Heart, label: "Passion", value: "Depuis toujours" },
  { icon: Star, label: "Cosplay", value: "Depuis 2022" },
  { icon: Users, label: "Réseaux", value: "Depuis 2024" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium tracking-wide uppercase mb-4">
              L'histoire de KAHASOO
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              À Propos d'Asya
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Découvrez le parcours d'Asya, de la passion du cosplay à la création de KAHASOO.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-center p-6 rounded-xl bg-card border"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-5 w-5 text-secondary-foreground" />
                </div>
                <p className="font-display text-lg font-semibold">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <article className="prose prose-lg max-w-none">
            {chapters.map((chapter, chapterIndex) => (
              <motion.div
                key={chapter.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-body flex items-center justify-center shrink-0">
                    {chapterIndex + 1}
                  </span>
                  {chapter.title}
                </h2>
                <div className="space-y-4">
                  {chapter.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-foreground/80 leading-[1.8] font-body text-base md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </article>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-8 md:p-12 rounded-2xl bg-secondary/50 border"
          >
            <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
            <p className="font-display text-xl md:text-2xl font-bold mb-3">
              Chaque passion mérite de prendre vie
            </p>
            <p className="text-muted-foreground max-w-lg mx-auto mb-6">
              Et chaque costume mérite d'être aussi unique que la personne qui le porte.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Découvrir la boutique
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
