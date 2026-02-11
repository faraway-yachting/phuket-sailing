const fs = require('fs');

const translations = {
  de: {
    hero: {
      title: "Katamaran Charter Phuket – Privates Segeln in Komfort & Stil",
      description1: "Charteren Sie einen privaten Katamaran in Phuket und erkunden Sie Thailands atemberaubendste Inseln, wie sie es verdienen — in Ihrem eigenen Tempo, mit Ihrer eigenen Crew, von einer Yacht, die für Raum, Stabilität und ganztägigen Komfort konzipiert ist.",
      description2: "Ob Sie eine romantische Flucht zu den Phi Phi Inseln, ein Familienabenteuer rund um die Phang Nga Bucht oder eine mehrtägige Kreuzfahrt südlich nach Koh Lipe planen, unsere Segelkatamarane bieten das perfekte Gleichgewicht aus Luxus und Freiheit auf der Andamanensee.",
      cta: "Holen Sie sich Ihr kostenloses Angebot"
    },
    cta1: {
      text: "Planen Sie eine Katamaran-Charter in Phuket? Teilen Sie uns Ihre Termine, Gruppengröße und Wunschliste mit — wir senden Ihnen innerhalb von 24 Stunden einen personalisierten Reiseplan und ein Angebot. Keine Verpflichtung.",
      button1: "Kostenloses Katamaran-Angebot erhalten",
      button2: "WhatsApp uns jetzt"
    },
    intro: {
      title: "Premium Katamaran Charters in Phuket, Thailand",
      section1: {
        title: "Private Segelerlebnisse für Raum, Stabilität & Komfort konzipiert",
        p1: "Eine Katamaran-Charter bietet Ihnen etwas, das kein Schnellboot, Longtail oder Standard-Yacht erreichen kann — echten Raum zum Atmen. Doppelrumpf schafft eine breite, stabile Plattform mit großzügigem Deckplatz zum Entspannen, Speisen und Beobachten, wie Inseln vorbeiziehen. Unter Deck bedeuten private Kabinen mit eigenen Badezimmern, dass Sie niemals Komfort für Abenteuer opfern müssen.",
        p2: "Unsere Katamarane liegen flach auf dem Wasser. Es gibt kein Krängen, kein Rollen und viel weniger Bewegung als Einrumpf-Segelboote — was sie zur komfortabelsten Wahl für Familien mit Kindern, Gäste, die seekrank werden, und jeden macht, der einfach entspannen möchte, anstatt sich festzuhalten.",
        p3: "Jede private Katamaran-Charter von Phuket umfasst eine professionelle Crew — lizenzierter Skipper, Bordkoch und erfahrener Decksmann — daher benötigen Sie keine Segelerfahrung. Sie bestimmen das Tempo. Sie kümmern sich um alles andere."
      },
      section2: {
        title: "Luxus-Phuket-Katamarane mit außergewöhnlichem Wert",
        p1: "Premium-Katamaran-Charters in Phuket kosten 30–50% weniger als vergleichbare Erlebnisse im Mittelmeer, in der Karibik oder im Südpazifik — ohne Kompromisse bei Qualität, Crew-Standards oder Schiffsbedingung. Thailands niedrigere Betriebskosten bedeuten, dass Ihr Budget weiter reicht, egal ob Sie eine Tagestour oder eine wochenlange Expedition buchen.",
        p2: "Unsere Flotte reicht von modernen 38-Fuß-Katamaranen, ideal für Paare und kleine Gruppen, bis hin zu geräumigen 45-Fuß+ Schiffen, die Familien und größere Gruppen mit vier privaten Kabinen, Klimaanlage und voll ausgestatteten Küchen aufnehmen."
      },
      pricing: {
        dayCharters: "Tagescharters",
        overnight: "Übernachtung",
        premium: "Premium klimatisiert",
        from: "ab"
      }
    },
    whyCatamaran: {
      title: "Warum ein Katamaran die beste Art ist, Phuket zu segeln",
      features: {
        space: {
          title: "Geräumige Decks, sanftes Segeln & modernes Design",
          p1: "Das Doppelrumpf-Design eines Segelkatamarans schafft fast doppelt so viel nutzbaren Deckplatz wie ein Einrumpf ähnlicher Länge. Breite Trampoline am Bug, schattige Cockpit-Essbereiche und offene Hecks mit Schwimmplattformen bedeuten, dass Ihre Gruppe niemals an einen Ort gedrängt wird. Auf einem Katamaran findet jeder seinen eigenen Raum — ob Sonnenbaden, Lesen im Schatten oder Beobachten, wie Ihre Kinder vom Schwimmleiter aus schnorcheln.",
          p2: "Moderne Segelkatamarane zeichnen sich auch durch geringen Tiefgang aus, sodass sie in geschützten Buchten ankern und sich in türkisfarbene Lagunen zurückziehen können, die tiefer gekielte Yachten und größere Boote einfach nicht erreichen können. Dies ist ein echter Vorteil rund um Phukets Kalksteininseln, wo die besten Schwimmplätze oft in flachem, geschütztem Wasser nahe dem Ufer liegen."
        },
        safety: {
          title: "Ideale Sicherheit & Balance aus Leistung und Entspannung",
          p1: "Katamarane gehören zu den sichersten Schiffen auf dem Wasser. Doppelrumpf macht sie praktisch unmöglich zu kentern, und ihre breite Breite bietet eine stabile Plattform auch bei rauer See. Für Familien mit kleinen Kindern ist diese Stabilität ein echter Sicherheitsvorteil — Kinder können sich frei auf dem Deck bewegen, ohne das ständige Kippen, das beim Einrumpf-Segeln auftritt.",
          p2: "Dies ist besonders wichtig in Phuket, wo Schnellboot-Touren die häufigste Art bleiben, wie Touristen Inseln wie Phi Phi und James Bond Island besuchen. Schnellboot-Unfälle in thailändischen Gewässern machen mit beunruhigender Regelmäßigkeit internationale Schlagzeilen — überfüllte Boote, hohe Geschwindigkeiten, raue Überfahrten auf offener See und begrenzte Sicherheitsausrüstung schaffen echte Risiken, die Touristen oft nicht berücksichtigen, bis sie an Bord sind. Eine private Katamaran-Charter ist das gegenteilige Erlebnis: kontrollierte Geschwindigkeiten, professionelle Crew, ordnungsgemäße Sicherheitsausrüstung, ruhiges Segeln und die Freiheit, Ihre Route anzupassen, wenn sich die Bedingungen ändern."
        },
        alternative: {
          title: "Eine raffinierte Alternative zu Standard-Phuket-Boot-Charters",
          p1: "Die meisten Bootscharters in Phuket fallen in zwei Kategorien: Budget-Schnellboote, die Volumen über Komfort priorisieren, oder teure Superyachten, die die meisten Reisenden ausschließen. Eine Katamaran-Charter liegt im Sweet Spot — wirklich luxuriös, wunderschön gestaltet und vollständig bemannt, aber zu einem Preis, der mehrtägiges Segeln für Paare, Familien und Freundesgruppen zugänglich macht, die etwas Besonderes wollen, ohne fünfstellige Beträge pro Nacht auszugeben."
        }
      }
    },
    cta2: {
      icon: "⚓",
      title: "Phukets Hauptsegelsaison: November–April",
      text: "Die ruhigsten Gewässer, klarste Sicht und beständigsten Brisen der Andamanensee liegen zwischen November und April. Weihnachts-, Neujahrs- und chinesische Neujahrs-Charters sind 2–3 Monate im Voraus ausgebucht. Wenn Ihre Termine flexibel sind, bieten Übergangsmonate (November, April) die beste Verfügbarkeit und den besten Wert.",
      button: "Katamaran-Verfügbarkeit prüfen"
    },
    charterOptions: {
      title: "Katamaran-Charter-Optionen in Phuket",
      options: {
        day: {
          title: "Private Tages-Katamaran-Charters",
          price: "Ab 800 €/Tag",
          perfectFor: "Abfahrt ~9:00 Uhr, Rückkehr ~17:30 Uhr | Bis zu 8 Gäste",
          description: "Eine ganztägige private Katamaran-Charter ist die beste Art, Phukets Inseln zu erleben, wenn Sie wenig Zeit haben. Verlassen Sie die Chalong Bay am Morgen, segeln Sie zu Ihrem gewählten Ziel — Phi Phi, Racha-Inseln, Phang Nga Bucht oder Koh Hong — und kehren Sie bei Sonnenuntergang zurück. Mittagessen, zubereitet von Ihrem Bordkoch, Schnorchelausrüstung, Kajaks und Paddleboards sind alle enthalten.",
          linkText: "Jetzt buchen →"
        },
        extended: {
          title: "Verlängerter Tag & Ganztagessegeln",
          price: "Ab 1.000 €/Tag",
          perfectFor: "Flexible Planung | Ideal für vollständige Phi Phi Erkundung",
          description: "Möchten Sie weiter fahren oder länger draußen bleiben? Verlängerte Tagescharters verschieben die Abfahrt früher und die Rückkehr später, sodass Sie Zeit haben, Ziele wie die andere Seite von Phi Phi oder die äußeren Racha-Inseln ohne Eile zu erreichen. Diese sind ideal, wenn Sie die Tiefe einer Übernachtungsreise möchten, aber lieber an Land schlafen.",
          linkText: "Jetzt buchen →"
        },
        overnight: {
          title: "Übernachtungs- & Mehrtageskreuzfahrten",
          price: "Ab 1.000 €/Nacht",
          perfectFor: "4 private Kabinen, eigene Badezimmer | Alle Mahlzeiten, Crew, Aktivitäten enthalten",
          description: "Mehrtägige Katamaran-Kreuzfahrten erschließen Phukets magischste Erlebnisse — Übernachtungsankerplätze in verlassenen Buchten, Sonnenaufgangsschwimmen, bevor andere Boote ankommen, und die Freiheit, abgelegene Inseln zu erkunden, die Tagesausflügler niemals erreichen. Schlafen Sie in privaten Kabinen, speisen Sie unter den Sternen und wachen Sie jeden Morgen auf einer neuen Insel auf.",
          linkText: "Jetzt buchen →"
        }
      },
      multiDayInfo: "Beliebte mehrtägige Routen umfassen: Phi Phi und Koh Lanta (2–3 Nächte), Koh Rok und Koh Ha (3–4 Nächte) und die ultimative Expedition südlich nach Koh Lipe und dem Butang-Archipel (5–7 Nächte)."
    },
    destinations: {
      title: "Phuket-Inselrouten & -Ziele mit Katamaran",
      phiPhi: {
        title: "Katamaran Charter Phi Phi Inseln, Maya Bay & Umgebende Lagunen",
        description: "Thailands ikonischstes Segelziel. Aufragende Kalksteinklippen, Maya Bay (aus The Beach), Monkey Beach, Pileh Lagune und lebendige Korallenriffe. Der geringe Tiefgang eines Katamarans ermöglicht es Ihnen, in der Pileh Lagune zu ankern, wo größere Schiffe nicht hineinkommen können — und Übernachtungsaufenthalte bedeuten, dass Sie Phi Phi erleben, nachdem die Schnellboote abgefahren sind.",
        distance: "4–5 Stunden Segeln von der Chalong Bay",
        type: "Tagesausflug oder Übernachtung",
        linkText: "Katamaran Charter →"
      },
      phangNga: {
        title: "Katamaran Charter Phang Nga Bucht & Dramatische Kalksteinlandschaften",
        description: "Vertikale Kalksteinkarste, die aus smaragdgrünem Wasser aufsteigen, James Bond Island, versteckte Meeshöhlen und traditionelle schwimmende Dörfer. Kajak durch eingestürzte Höhlensysteme in geheime Hongs (Lagunen), die nur bei bestimmten Gezeiten zugänglich sind. Die Phang Nga Bucht ist ruhiger als Ziele auf offener See und daher ideal für Familien und Segelanfänger.",
        distance: "3–4 Stunden von der Chalong Bay",
        type: "Perfekt für Tagescharters",
        linkText: "Katamaran Charter →"
      },
      racha: {
        title: "Racha-Inseln & Klarwasser-Ankerplätze",
        subtitle1: "Schnorchelriffe, Kajakrouten & Ruhige Ankerplätze",
        description1: "Die Racha-Inseln (Racha Yai und Racha Noi) bieten Phukets nächsten Premium-Ankerplatz — kristallklares Wasser, gesunde Korallenriffe und ruhige Buchten, die perfekt zum Schnorcheln, Kajakfahren und Paddleboarding sind. Die Siam Bay und Batok Bay auf Racha Yai bieten geschützte Übernachtungsankerplätze mit unberührten weißen Sandstränden.",
        subtitle2: "Abgelegene Strände, Buchten & Natürliche Höhlen",
        description2: "Nachdem Tagesausflugsboote am Nachmittag abgefahren sind, haben Übernachtungs-Katamaran-Gäste ganze Strände für sich allein. Erkunden Sie versteckte Buchten entlang der Ostküste von Racha Yai, schwimmen Sie durch natürliche Felsformationen und genießen Sie den Sonnenuntergang von Ankerplätzen ohne andere Boote in Sicht.",
        distance: "2–3 Stunden von der Chalong Bay",
        type: "Nächster Übernachtungsziel | Ausgezeichnet für Familien",
        linkText: "Katamaran Charter →"
      }
    },
    testimonials: {
      title: "Was Katamaran-Charter-Gäste sagen",
      testimonial1: {
        quote: "Der Katamaran war makellos, geräumig und die Crew ließ uns wie Familie fühlen. Wir ankerten über Nacht bei Phi Phi und hatten Maya Bay praktisch für uns allein bei Sonnenaufgang.",
        author: "David & Claire, Kanada",
        charter: "3-Nächte-Katamaran-Kreuzfahrt",
        rating: 5
      },
      testimonial2: {
        quote: "Wir wählten einen Katamaran speziell, weil unsere Kinder seekrank werden. Null Probleme — sie verbrachten die ganze Reise damit, vom Heck zu springen und zu schnorcheln. Beste Entscheidung, die wir getroffen haben.",
        author: "Die Tanaka-Familie, Japan",
        charter: "Private Tages-Charter, Racha-Inseln",
        rating: 5
      },
      testimonial3: {
        quote: "Wir haben Einrumpf-Yachten in Kroatien und Griechenland gechartert. Der Katamaran in Phuket war komfortabler, die Crew war besser und kostete die Hälfte. Wir kommen nächstes Jahr zurück.",
        author: "Mark & Freunde, UK",
        charter: "5-Nächte-Charter, Phi Phi nach Koh Lanta",
        rating: 5
      },
      readAll: "Alle 750+ Bewertungen lesen →"
    },
    crew: {
      title: "Katamaran-Crews, Komfort & Bord-Erlebnis",
      features: {
        skippers: {
          title: "Professionelle Skipper mit lokalem Andamanensee-Wissen",
          content: "Jede Katamaran-Charter umfasst einen lizenzierten thailändischen Skipper mit tiefem Wissen über die Andamanensee — Gezeitenmuster, saisonale Wetterverschiebungen, die besten Ankerplätze für jede Tageszeit und ruhige Schnorchelplätze, die nicht in Reiseführern erscheinen. Mit 30 Jahren kollektiver Erfahrung passen unsere Kapitäne Routen in Echtzeit an, um sicherzustellen, dass Sie die besten Bedingungen und das lohnendste Segelerlebnis erhalten."
        },
        comfort: {
          title: "Komfortable Kabinen, Badezimmer & Beschattete Lounge-Bereiche",
          p1: "Unsere Katamarane verfügen über 3–4 private Kabinen mit Queen- oder Doppelbetten, eigene Badezimmer mit Warmwasser-Duschen und reichlich Stauraum. An Deck bieten schattige Cockpit-Bereiche komfortablen Ess- und Entspannungsraum, geschützt vor der Sonne, während offene Vordeck-Trampoline und Schwimmplattformen direkten Zugang zum Wasser bieten.",
          p2: "Klimatisierte Katamarane sind für Gäste verfügbar, die klimakontrollierten Komfort unter Deck möchten — besonders beliebt während der wärmeren Monate."
        },
        meals: {
          title: "Frisch zubereitete thailändische Mahlzeiten, Getränke & Catering-Optionen",
          p1: "Ihr Bordkoch bereitet jede Mahlzeit frisch aus lokalen Zutaten zu. Erwarten Sie authentische thailändische Küche — grünes Curry, Pad Thai, Tom Yum Suppe, frisches Meeresfrüchte und tropische Früchte — neben internationalen Optionen auf Anfrage. Strand-BBQs an abgelegenen Ufern sind ein Highlight von Übernachtungs-Charters.",
          p2: "Alle Ernährungsvorlieben werden berücksichtigt: vegetarische, vegane, halal, glutenfreie und allergenspezifische Menüs. Für Feiern arrangieren wir auf Anfrage maßgeschneiderte Kuchen, Premium-Meeresfrüchte-Platten und Champagner-Service.",
          p3: "Alle Mahlzeiten, Trinkwasser, Kraftstoff und Aktivitäten enthalten — transparente Preisgestaltung, keine versteckten Gebühren."
        }
      }
    },
    specialMoments: {
      title: "Private Phuket-Katamaran-Charters für besondere Momente",
      honeymoon: {
        title: "Flitterwochen & Romantische Segelfluchten Phuket",
        content: "Ein privater Katamaran ist die romantischste Art, Phukets Inseln zu erleben. Abgelegene Ankerplätze, Sonnenuntergangs-Dinner an Deck, Champagner-Service und Morgen, an denen man in verlassenen Buchten aufwacht, schaffen eine Intimität, die kein Resort erreichen kann. Wir spezialisieren uns auf Flitterwochen, Jubiläen und Heiratsanträge — mit personalisierten Berührungen wie Blumen, maßgeschneiderten Kuchen und Kerzenlicht-Dinner, die auf Anfrage arrangiert werden.",
        linkText: "Flitterwochen-Pakete ansehen →"
      },
      family: {
        title: "Phuket-Familienurlaube & Raffinierte Gruppenausflüge",
        p1: "Katamarane sind die familienfreundlichste Charter-Option in Phuket. Das breite, stabile Deck bedeutet, dass Kinder sich frei bewegen können. Flache geschützte Buchten bieten sicheres Schwimmen. Schnorchelausrüstung, Kajaks und Paddleboards halten Kinder stundenlang unterhalten. Und mit einer professionellen Crew, die Segeln, Kochen und Sicherheit übernimmt, können Eltern sich tatsächlich entspannen.",
        p2: "Für Freundesgruppen bieten Katamarane den perfekten gemeinsamen Urlaub — genug privaten Kabinenplatz für alle, aber viele gemeinsame Bereiche für lange Mahlzeiten, Kartenspiele und späte Nächte unter den Sternen.",
        linkText: "Familien-Segelführer →"
      },
      celebrations: {
        title: "Feiern auf See ohne die Menschenmassen in Phuket",
        content: "Geburtstage, Meilenstein-Jubiläen, Junggesellen- und Junggesellinnenabschiede, Firmenretreats — ein privater Katamaran bietet Ihnen einen exklusiven schwimmenden Veranstaltungsort ohne Fremde, ohne Lärmbeschränkungen von benachbarten Tischen und ohne Kompromisse. Wir passen Dekorationen, Menüs, Unterhaltung und Fotografie mit Vorausplanung an.",
        linkText: "Eine Feier-Charter planen →"
      }
    },
    vsMonohull: {
      title: "Katamaran Charter vs Einrumpf-Charters",
      subtitle: "Mehr Raum, Privatsphäre & Bord-Komfort",
      table: {
        feature: "Funktion",
        catamaran: "Katamaran",
        monohull: "Einrumpf",
        deckSpace: {
          label: "Deckplatz",
          catamaran: "Breite Breite, doppelte Entspannungsbereiche, großes Cockpit",
          monohull: "Schmales Deck, begrenzte Sitzplätze"
        },
        stability: {
          label: "Stabilität",
          catamaran: "Flach, minimales Rollen — ideal für Nicht-Segler",
          monohull: "Krängt unter Segel, ständige Bewegung"
        },
        cabins: {
          label: "Kabinen",
          catamaran: "3–4 geräumige Kabinen mit eigenen Badezimmern",
          monohull: "Typischerweise kleiner, weniger eigene Badezimmer"
        },
        seasickness: {
          label: "Seekrankheitsrisiko",
          catamaran: "Sehr niedrig — stabile Plattform",
          monohull: "Höher — Roll- und Krängbewegung"
        },
        swimAccess: {
          label: "Schwimmzugang",
          catamaran: "Offene Heck-Plattformen, einfacher Wassereinstieg",
          monohull: "Leiterzugang, schwieriger"
        }
      },
      anchorage: {
        title: "Zugang zu ruhigeren Ankerplätzen und versteckten Orten",
        text: "Der geringe Tiefgang eines Katamarans (typischerweise 1,0–1,5 Meter) bedeutet, dass Sie in türkisfarbenen Untiefen ankern, sich in enge Lagunen zurückziehen und nahe an Stränden ankern können, die tiefer gekielte Einrumpf-Yachten nicht erreichen können. Rund um Phukets Kalksteininseln — insbesondere Phi Phis Pileh Lagune, Koh Hongs innere Lagune und die geschützten Buchten von Racha Yai — bedeutet dies dramatisch bessere Ankerpositionen und privateren Strandzugang."
      },
      calm: {
        title: "Eine ruhigere, elegantere Art, Phuket zu erkunden",
        p1: "Einrumpf-Yachten sind für Leistungssegeln gebaut — aufregend für erfahrene Segler, aber das ständige Krängen und die Bewegung können für Gäste unangenehm sein, die einfach entspannen möchten. Ein Katamaran segelt flach, bewegt sich sanft und bietet ein ruhiges, zivilisiertes Erlebnis, bei dem der Fokus auf dem Ziel und der Gesellschaft liegt, anstatt sich festzuhalten.",
        p2: "Für erfahrene Segler, die ein sportlicheres Erlebnis möchten, bieten wir auch",
        link: "Einrumpf- und Bareboat-Optionen →"
      }
    },
    customExperience: {
      title: "Ihr Phuket-Geschmack Katamaran-Charter-Erlebnis",
      itineraries: {
        title: "Maßgeschneiderte Reiserouten basierend auf Ihren Präferenzen",
        content: "Keine zwei Charters sind gleich. Sagen Sie uns, was Ihnen am wichtigsten ist — Schnorcheln, Fotografie, abgelegene Strände, Nachtleben, Inselhüpfen oder einfach nichts tun — und wir entwerfen eine Reiseroute darum. Jede private Katamaran-Charter ist vollständig anpassbar: Ziele, Timing, Aktivitäten, Mahlzeiten und besondere Wünsche."
      },
      routes: {
        title: "Flexible Segelrouten, geleitet von Bedingungen",
        content: "Unsere Skipper passen Ihre Route basierend auf Echtzeit-Wetter, Windrichtung, Gezeitenmustern und Seebedingungen an. Wenn die Bedingungen eine andere Insel oder einen anderen Ankerplatz als geplant begünstigen, schlägt Ihr Kapitän die beste Alternative vor — immer mit Priorität auf Ihren Komfort, Ihre Sicherheit und Ihr Vergnügen über einen starren Zeitplan."
      },
      unhurried: {
        title: "Ungehetzte Tage, fokussiert auf Qualitätszeit auf See",
        content: "Die Schönheit einer privaten Katamaran-Charter ist, dass es keinen Zeitplan gibt, den Sie einhalten müssen, außer Ihrem eigenen. Schlafen Sie aus. Verweilen Sie an einem Schnorchelplatz. Bleiben Sie vor Anker, während die Sonne untergeht. Trinken Sie einen zweiten Kaffee, bevor Sie die Segel setzen. Dies ist keine Tour — es ist Ihre Zeit, Ihre Art."
      }
    },
    cta3: {
      title: "Ihre Katamaran-Charter beginnt mit einem Gespräch",
      text: "Jede großartige Segelreise beginnt damit, zu verstehen, was Sie wollen. Teilen Sie uns Ihre Reisedaten, Gruppengröße, bevorzugte Ziele und besondere Anlässe mit — und wir erstellen eine maßgeschneiderte Katamaran-Reiseroute mit transparenter Preisgestaltung. Keine Verpflichtung, kein Druck.",
      button1: "Holen Sie sich Ihr kostenloses Katamaran-Angebot",
      button2: "WhatsApp uns"
    },
    planCharter: {
      title: "Planen Sie Ihre Katamaran-Charter in Phuket",
      selectTitle: "Wählen Sie den richtigen Katamaran und die Dauer",
      table: {
        charterType: "Charter-Typ",
        duration: "Dauer",
        bestFor: "Am besten für",
        startingPrice: "Startpreis",
        dayCharter: {
          type: "Tages-Charter",
          duration: "Ganzer Tag (8–9 Stunden)",
          bestFor: "Kurze Aufenthalte, spezifische Inselbesuche",
          price: "800 €/Tag"
        },
        extendedDay: {
          type: "Verlängerter Tag",
          duration: "10–12 Stunden",
          bestFor: "Weitere Ziele erreichen",
          price: "1.000 €/Tag"
        },
        overnight: {
          type: "Übernachtung",
          duration: "2–4 Nächte",
          bestFor: "Phi Phi, Racha, Koh Lanta Rundfahrten",
          price: "1.000 €/Nacht"
        },
        multiDay: {
          type: "Mehrtages-Expedition",
          duration: "5–7 Nächte",
          bestFor: "Koh Rok, Koh Ha, Koh Lipe",
          price: "1.000 €/Nacht"
        },
        premium: {
          type: "Premium/Klima",
          duration: "Beliebige Dauer",
          bestFor: "Maximaler Komfort das ganze Jahr über",
          price: "2.500 €/Nacht"
        }
      },
      includes: {
        title: "Alle Preise beinhalten:",
        text: "Crew, alle Mahlzeiten, Trinkwasser, Kraftstoff, Ankerplatz, Schnorchelausrüstung, Kajaks, Paddleboards, Sicherheitsausrüstung und Unfallversicherung (1M THB pro Gast).",
        notIncluded: "Nicht enthalten:",
        notIncludedText: "Nationalparkgebühren (300–400 THB pro Erwachsenem pro Park, bar), alkoholische Getränke."
      },
      confidence: {
        title: "Segeln Sie Phuket mit Vertrauen und Komfort",
        points: {
          reviews: "750+ Fünf-Sterne-Bewertungen von internationalen Reisenden auf Google, TripAdvisor und Buchungsplattformen",
          experience: "30 Jahre Andamanensee-Erfahrung — unser Team kennt diese Gewässer besser als jeder andere",
          licensed: "Thailand Tourismusbehörde lizenziert (OTD #34/02546)",
          award: "World Luxury Travel Awards Gewinner 2025",
          refund: "Kostenlose Umbuchung oder vollständige Rückerstattung, wenn wir aus Wettergründen absagen — Ihre Sicherheit steht immer an erster Stelle"
        }
      },
      specialists: {
        title: "Sprechen Sie mit unseren Phuket-basierten Charter-Spezialisten",
        text: "Unser Team ist in der Chalong Bay, Phukets Hauptyachthafen, ansässig — 15 Minuten von Phuket Town, 30 Minuten von Patong, 40 Minuten vom Flughafen entfernt. Wir sind kein Buchungsaggregator oder Übersee-Callcenter. Sie haben es direkt mit den Menschen zu tun, die die Flotte verwalten, die Crews einweisen und diese Gewässer jeden Tag segeln."
      }
    },
    faq: {
      title: "Häufig gestellte Fragen",
      subtitle: "Katamaran Charters Phuket",
      questions: {
        cost: {
          q: "Wie viel kostet eine Katamaran-Charter in Phuket?",
          a: "Tagescharters beginnen ab 800 €. Übernachtungs-Katamaran-Charters ab 1.000 €/Nacht. Premium klimatisierte Katamarane ab 2.500 €/Nacht. Alle Preise beinhalten Crew, Mahlzeiten, Kraftstoff und Aktivitäten — keine versteckten Gebühren."
        },
        guests: {
          q: "Wie viele Gäste kann ein Katamaran aufnehmen?",
          a: "Unsere Katamarane haben 3–4 private Kabinen für bis zu 8 Übernachtungsgäste. Für Tagescharters können wir je nach Schiff bis zu 10–12 Gäste beherbergen. Jede Buchung ist privat — Sie teilen nicht mit Fremden."
        },
        experience: {
          q: "Benötige ich Segelerfahrung, um einen Katamaran zu chartern?",
          a: "Überhaupt nicht. Jede bemannte Katamaran-Charter umfasst einen lizenzierten Skipper, der das gesamte Segeln übernimmt. Sie können frei teilnehmen oder einfach entspannen. Für erfahrene Segler bieten wir auch Bareboat-Katamaran-Charters an (gültige Lizenz erforderlich)."
        },
        children: {
          q: "Sind Katamarane sicher für Kinder?",
          a: "Ja — Katamarane sind die sicherste und familienfreundlichste Charter-Option. Die breite, stabile Plattform bedeutet sehr wenig Bewegung, Sicherheitsgeländer und Netze sind Standard, und Rettungswesten werden für alle Altersgruppen bereitgestellt. Unsere Crews sind erfahren mit Familien und halten Kinder mit Wasseraktivitäten beschäftigt."
        },
        difference: {
          q: "Was ist der Unterschied zwischen einer Katamaran- und einer Einrumpf-Charter?",
          a: "Katamarane sind breiter, stabiler und haben mehr Deck- und Kabinenplatz. Sie krängen (lehnen) nicht unter Segel, was sie viel komfortabler für Gäste macht, die keine erfahrenen Segler sind. Sie haben auch geringere Tiefgänge, was Zugang zu Ankerplätzen und Lagunen ermöglicht, die Einrumpf-Yachten nicht erreichen können."
        },
        islands: {
          q: "Welche Inseln kann ich mit einem Katamaran von Phuket aus besuchen?",
          a: "Tagesausflüge: Phi Phi Inseln, Racha-Inseln, Phang Nga Bucht, Koh Hong. Mehrtägig: Koh Lanta, Koh Rok, Koh Ha, Similan-Inseln, Koh Lipe. Ihre Reiseroute ist vollständig anpassbar."
        },
        included: {
          q: "Was ist im Charterpreis enthalten?",
          a: "Professionelle Crew, alle Mahlzeiten, Trinkwasser, Kraftstoff, Ankerplatz, Schnorchelausrüstung, Kajaks, Paddleboards, Sicherheitsausrüstung und Unfallversicherung. Nationalparkgebühren und alkoholische Getränke sind extra."
        },
        bestTime: {
          q: "Wann ist die beste Zeit für eine Katamaran-Charter in Phuket?",
          a: "November bis April bietet die besten Bedingungen — ruhige See, klarer Himmel und stetige Segelwinde. Dezember bis März ist Hauptsaison und bucht am frühesten. Für ruhigere Gewässer und niedrigere Preise sind November und April ausgezeichnete Übergangsmonate."
        },
        advance: {
          q: "Wie weit im Voraus sollte ich buchen?",
          a: "Hauptsaison (Dez–Mär): Mindestens 2–4 Wochen. Weihnachten/Neujahr: 2–3 Monate empfohlen. Für die beste Katamaran-Auswahl lohnt sich eine frühe Buchung immer — besonders für mehrtägige Charters."
        },
        weather: {
          q: "Was ist, wenn das Wetter schlecht ist?",
          a: "Wir buchen kostenlos um, schlagen alternative geschützte Routen vor oder bieten eine vollständige Rückerstattung, wenn wir aus Sicherheitsgründen absagen. Unsere Skipper überwachen die Bedingungen ständig und priorisieren immer Ihre Sicherheit und Ihren Komfort."
        }
      }
    },
    finalCta: {
      title: "Buchen Sie Ihre Phuket-Katamaran-Charter",
      subtitle: "Privates Katamaran-Segeln ab 800 €/Tag | Tagesausflüge | Übernachtungskreuzfahrten | Mehrtages-Expeditionen",
      waysTitle: "Drei Möglichkeiten, um zu beginnen:",
      phone: "Anruf/WhatsApp:",
      phoneText: "Wir antworten innerhalb von 1 Stunde während der Geschäftszeiten",
      email: "E-Mail:",
      emailText: "Maßgeschneiderte Reiseroute & Angebot innerhalb von 24 Stunden",
      line: "Line App: Sofort verbinden",
      button: "HOLEN SIE SICH IHR KOSTENLOSES KATAMARAN-ANGEBOT →",
      office: "Büro: Chalong Bay, Phuket — 15 Minuten von Phuket Town, 30 Minuten von Patong, 40 Minuten vom Flughafen",
      footer: "Thailand Tourismusbehörde lizenziert (OTD #34/02546) • Vollständig versichert • World Luxury Travel Awards Gewinner 2025"
    }
  }
};

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const langs = ['de'];

langs.forEach(lang => {
  const filePath = `messages/${lang}.json`;
  const file = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  function deepMerge(target, source) {
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        if (!target[key]) target[key] = {};
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  
  deepMerge(file.catamaranCharter, translations[lang]);
  fs.writeFileSync(filePath, JSON.stringify(file, null, 2));
  console.log(`Translated ${lang}.json`);
});

console.log('Done!');
