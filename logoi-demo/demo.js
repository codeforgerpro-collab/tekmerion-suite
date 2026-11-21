
"use strict";
/* ---------- Text, English and Greek side by side ---------- */
const I18N = {
en: {
  app:"Logoi Oikonomias", sub:"Wealth-stewardship preparation",
  banner:"Demo for review · fictional sample data available · everything stays in this browser",
  steps:{welcome:"Start",urgent:"Immediate needs",purpose:"Purpose",given:"Ledger of the Given",inventory:"What I know",worksheet:"Asset purpose",questions:"Questions to ask",roles:"Professionals",briefing:"Briefing",logos:"Oikonomikos Logos"},
  back:"Back", next:"Next", exportNow:"Export now", reset:"Reset", resetConfirm:"Click again to erase", copy:"Copy", download:"Download .md",
  copied:"Copied", copyFail:"Copy was refused. Select the text below and copy it.", downloaded:"Download started", erased:"Demo data erased", sampleLoaded:"Fictional sample data loaded",
  w:{h:"Be an informed principal before you meet the adviser.", lead:"A private place to say what your resources are for, what you know, and what you still need to ask. You can export your work at any time and see a professional whenever you need one.",
     routes:"Where are you starting from? Choose any that apply.",
     r:{inherit:"I may inherit or assume family responsibility",wealth:"I have received or created significant wealth",family:"I want to prepare for a family conversation",pro:"I am preparing to meet a professional"},
     start:"Start the short route", sample:"Load fictional sample data", note:"This demo gives no advice and no recommendations. Entries stay in this browser. The wording is a draft for professional review."},
  u:{h:"Does anything here need help now?", lead:"Some situations should not wait for a course or a demo. Tick any that apply.",
     items:["A legal or tax deadline is close","Someone has asked me unexpectedly to transfer money","I suspect fraud or pressure on me or a relative","I cannot meet an obligation that is due","Someone is incapacitated or has died and action is needed","A decision I must make has a near deadline"],
     alert:"Do not wait to finish this demo. Contact a qualified lawyer, tax adviser or the competent authority now. If you suspect fraud or are in danger, call the police on 100 or the European emergency number 112. You can continue the demo afterwards."},
  p:{h:"What are these resources for?", lead:"Start with purpose. Products come later. A few honest sentences are enough.",
     for:"What do you want these resources to make possible?", horizon:"Time horizons you are considering", conflict:"Purposes that may pull against each other",
     people:"Who owns or controls the relevant resources, and who should take part in decisions?", peopleHint:"Roles such as 'my mother' or 'the co-founder' are enough. Names are optional."},
  g:{h:"Ledger of the Given", lead:"Record what you have received, and not only money. Note what you built through effort too: both can be true.",
     items:{fin:"Financial resources",prop:"Property",edu:"Education",net:"Networks and relationships",opp:"Opportunity",sec:"Security and stability"}, ph:"A line or two"},
  i:{h:"What do I know, and what do I not?", lead:"Mark how well you know each category. 'Unknown' is a good answer: it becomes a question for a professional. Ranges are optional.",
     status:"Status", range:"Optional range", note:"Note",
     st:{"":"Not marked",known:"Known",est:"Estimated",unk:"Unknown",held:"Held by someone else",na:"Not applicable",pref:"Prefer not to say"},
     rg:{"":"No range",a:"Under €100k",b:"€100k to €500k",c:"€500k to €2m",d:"€2m to €10m",e:"Over €10m"},
     cats:{cash:"Cash and deposits",sec:"Shares, bonds and funds",prop:"Property",biz:"Business interests",priv:"Private investments",pens:"Pensions and insurance",debt:"Debts and obligations",other:"Other"}},
  ws:{h:"What is one asset actually for?", lead:"Pick a category from your inventory. Market price is one part of value; this worksheet records the rest. It does not suggest keeping, selling or restructuring anything.",
     pick:"Category", none:"Choose a category", contributes:"What it contributes to you and to others", costs:"Known costs (upkeep, taxes, fees)", lost:"What may be lost if it were sold", gained:"What might be gained", unknown:"What is still unknown"},
  q:{h:"Questions to take to a professional", lead:"Tick the ones you want to ask. They go into your briefing. These are general questions, not advice.",
     list:["Which services are you authorised to provide, and where can I verify that?","Are you advising, managing, executing, holding assets or coordinating others?","How are you paid, including commissions or payments from third parties?","Which products and providers can you consider, and what limits apply?","What information do you need, and how will you protect it?","What are the estimated total costs and the main assumptions?","Who holds the assets, how are they reported, and what happens if a firm fails?","How are complaints, conflicts, termination and transfer handled?","Which matters need a lawyer, accountant or tax adviser?","How will our non-financial objectives and differing family interests be addressed?"],
     add:"Add your own question", ph:"Type a question", addBtn:"Add"},
  r:{h:"Who does what", lead:"Roles differ by country, authorisation and service. 'Certified' is not one category: ask for exact permissions and check them in the official register or with the professional body.",
     cards:[["Wealth manager or investment adviser","May advise, manage portfolios or execute orders, depending on authorisation. Ask how they are paid and who holds the assets."],["Lawyer","Drafts and reviews wills, succession documents, company and family arrangements. Ask which jurisdiction they advise on."],["Tax adviser or accountant","Explains reporting and tax consequences for your situation. Ask for questions to be answered in writing."],["Family office","Coordinates several professionals for a family. Ask who it works for and how it is paid."],["Bank or custodian","Holds assets and reports on them. Ask which protections apply to your specific arrangement."]],
     note:"Greek and EU specifics must be reviewed by qualified counsel before any public version."},
  b:{h:"Your professional briefing", lead:"You decide what goes in. Every line is labelled as your own statement; this platform has not verified it. It is not a suitability assessment.",
     inc:"Include in the briefing", s:{a1:"Purpose",a2:"Resources and obligations",a3:"People and decisions",a4:"Questions for the professional",a5:"Important limitations"},
     up:"user-provided", empty:"(nothing entered)", lim:"This document contains user-provided information and educational reflections. It is not verified by the platform, is not a suitability assessment, and does not replace the professional's own responsibilities.",
     horizon:"Time horizons", conflict:"Possible conflicts between purposes", unknowns:"Unknown or held by others", title:"Professional briefing (draft)", textLabel:"Plain text"},
  l:{h:"Your Oikonomikos Logos (draft)", lead:"A living account of your purposes, knowledge, commitments and questions. Edit any section. An unfinished draft can be exported.",
     assemble:"Fill empty sections from my entries",
     s:{recv:"What I have received or may receive",know:"What I know and need to learn",purpose:"What my resources are for",principles:"My decision principles and possible conflicts",owed:"People to whom I may owe an account",family:"Family and succession questions",next:"My next steps"},
     review:"Review date", title:"Oikonomikos Logos (draft)", note:"Not a will, power of attorney or any legal instrument."},
  rd:{h:"Preparation checklist", note:"Descriptive only. It never blocks an export or a call to a professional.",
      c:{purpose:"Purpose",info:"Information",literacy:"Basic literacy",family:"Family questions",pro:"Professional engagement"},
      s:{completed:"Completed",progress:"In progress",unknown:"Unknown",na:"Not applicable"}},
  foot:["General educational content and self-reflection tools. It does not manage assets or execute transactions, and it is not a substitute for personalised investment, legal, tax or other professional advice.","Information you enter is not verified. Laws and circumstances vary and change. This notice is a draft pending review by qualified counsel.","Tekmerion (company under formation) · Based on the book by Professor Dimitrios Thomakos · Lead Engineer: Antonios Vlachos"],
  sample:{for:"Keep the family home available to my children, fund their education, and leave room to start a business of my own.",horizon:"Next 3 years for education costs; 15 years for the home and a possible business.",conflict:"Keeping the home may limit the money available for the business.",people:"My mother holds the home. My brother and I are co-owners of the family company. My accountant prepares our tax returns.",
          given:{fin:"A share of a family company.",prop:"A family home we may inherit.",edu:"A degree abroad, partly funded by my parents.",net:"Business contacts built by my father.",opp:"A place in the family company.",sec:"A stable home growing up."},
          inv:{cash:["known","b","Savings account"],sec:["unk","","Not sure what my mother holds"],prop:["held","d","Home held by my mother"],biz:["est","c","Family company share"],priv:["na","",""],pens:["unk","","Need to ask"],debt:["known","a","Small loan"],other:["pref","",""]},
          ws:{cat:"prop",contributes:"Where the family gathers; a place for my children.",costs:"Upkeep and annual property taxes.",lost:"Family history and a shared place.",gained:"Cash that could fund the business.",unknown:"Its current value and my mother's wishes."},
          q:[0,1,2,5,6,8], custom:["How would you handle a disagreement between my brother and me?"],
          logos:{review:"2027-03-01"}}
},
el: {
  app:"Λόγοι Οικονομίας", sub:"Προετοιμασία για τη διαχείριση πλούτου",
  banner:"Παρουσίαση προς έλεγχο · διαθέσιμα φανταστικά δείγματα δεδομένων · όλα μένουν σε αυτό το πρόγραμμα περιήγησης",
  steps:{welcome:"Αρχή",urgent:"Άμεσες ανάγκες",purpose:"Σκοπός",given:"Μητρώο όσων έχετε λάβει",inventory:"Τι γνωρίζω",worksheet:"Σκοπός περιουσιακού στοιχείου",questions:"Ερωτήσεις",roles:"Επαγγελματίες",briefing:"Ενημερωτικό σημείωμα",logos:"Οικονομικός Λόγος"},
  back:"Πίσω", next:"Επόμενο", exportNow:"Εξαγωγή τώρα", reset:"Επαναφορά", resetConfirm:"Πατήστε ξανά για διαγραφή", copy:"Αντιγραφή", download:"Λήψη .md",
  copied:"Αντιγράφηκε", copyFail:"Η αντιγραφή απορρίφθηκε. Επιλέξτε το κείμενο παρακάτω και αντιγράψτε το.", downloaded:"Η λήψη ξεκίνησε", erased:"Τα δεδομένα της επίδειξης διαγράφηκαν", sampleLoaded:"Φορτώθηκαν φανταστικά δείγματα δεδομένων",
  w:{h:"Γίνετε ενημερωμένος εντολέας πριν συναντήσετε τον σύμβουλο.", lead:"Ένας ιδιωτικός χώρος για να πείτε σε τι χρησιμεύουν οι πόροι σας, τι γνωρίζετε και τι πρέπει ακόμη να ρωτήσετε. Μπορείτε να εξαγάγετε τη δουλειά σας οποιαδήποτε στιγμή και να απευθυνθείτε σε επαγγελματία όποτε χρειαστεί.",
     routes:"Από πού ξεκινάτε; Επιλέξτε ό,τι ισχύει.",
     r:{inherit:"Ίσως κληρονομήσω ή αναλάβω οικογενειακή ευθύνη",wealth:"Έχω λάβει ή δημιουργήσει σημαντικό πλούτο",family:"Θέλω να προετοιμαστώ για μια οικογενειακή συζήτηση",pro:"Προετοιμάζομαι να συναντήσω επαγγελματία"},
     start:"Ξεκινήστε τη σύντομη διαδρομή", sample:"Φόρτωση φανταστικών δεδομένων", note:"Η επίδειξη δεν δίνει συμβουλές ούτε συστάσεις. Οι καταχωρίσεις μένουν σε αυτό το πρόγραμμα περιήγησης. Η διατύπωση είναι σχέδιο προς επαγγελματικό έλεγχο."},
  u:{h:"Χρειάζεται κάτι από αυτά βοήθεια τώρα;", lead:"Ορισμένες καταστάσεις δεν πρέπει να περιμένουν ένα μάθημα ή μια επίδειξη. Επιλέξτε ό,τι ισχύει.",
     items:["Πλησιάζει νομική ή φορολογική προθεσμία","Κάποιος μου ζήτησε απρόσμενα να μεταφέρω χρήματα","Υποπτεύομαι απάτη ή πίεση προς εμένα ή συγγενή","Δεν μπορώ να ανταποκριθώ σε οφειλή που λήγει","Κάποιος είναι ανίκανος ή έχει πεθάνει και απαιτείται ενέργεια","Μια απόφαση που πρέπει να πάρω έχει κοντινή προθεσμία"],
     alert:"Μην περιμένετε να ολοκληρώσετε την επίδειξη. Επικοινωνήστε τώρα με εξειδικευμένο δικηγόρο, φοροτεχνικό ή την αρμόδια αρχή. Αν υποπτεύεστε απάτη ή κινδυνεύετε, καλέστε την Αστυνομία στο 100 ή τον ευρωπαϊκό αριθμό έκτακτης ανάγκης 112. Μπορείτε να συνεχίσετε την επίδειξη μετά."},
  p:{h:"Σε τι χρησιμεύουν αυτοί οι πόροι;", lead:"Ξεκινήστε από τον σκοπό. Τα προϊόντα έρχονται μετά. Λίγες ειλικρινείς προτάσεις αρκούν.",
     for:"Τι θέλετε να καταστήσουν δυνατό αυτοί οι πόροι;", horizon:"Χρονικοί ορίζοντες που εξετάζετε", conflict:"Σκοποί που μπορεί να έρχονται σε σύγκρουση",
     people:"Ποιος κατέχει ή ελέγχει τους σχετικούς πόρους και ποιος πρέπει να συμμετέχει στις αποφάσεις;", peopleHint:"Αρκούν ρόλοι όπως «η μητέρα μου» ή «ο συνιδρυτής». Τα ονόματα είναι προαιρετικά."},
  g:{h:"Μητρώο όσων έχετε λάβει", lead:"Καταγράψτε όσα έχετε λάβει, όχι μόνο χρήματα. Σημειώστε και όσα χτίσατε με προσπάθεια: μπορούν να ισχύουν και τα δύο.",
     items:{fin:"Οικονομικοί πόροι",prop:"Ακίνητα",edu:"Εκπαίδευση",net:"Δίκτυα και σχέσεις",opp:"Ευκαιρίες",sec:"Ασφάλεια και σταθερότητα"}, ph:"Μία-δύο γραμμές"},
  i:{h:"Τι γνωρίζω και τι όχι;", lead:"Σημειώστε πόσο καλά γνωρίζετε κάθε κατηγορία. Το «Άγνωστο» είναι καλή απάντηση: γίνεται ερώτηση προς επαγγελματία. Τα εύρη είναι προαιρετικά.",
     status:"Κατάσταση", range:"Προαιρετικό εύρος", note:"Σημείωση",
     st:{"":"Δεν έχει σημειωθεί",known:"Γνωστό",est:"Εκτιμώμενο",unk:"Άγνωστο",held:"Το κατέχει κάποιος άλλος",na:"Δεν ισχύει",pref:"Προτιμώ να μην πω"},
     rg:{"":"Χωρίς εύρος",a:"Κάτω από €100χιλ.",b:"€100χιλ. έως €500χιλ.",c:"€500χιλ. έως €2εκ.",d:"€2εκ. έως €10εκ.",e:"Πάνω από €10εκ."},
     cats:{cash:"Μετρητά και καταθέσεις",sec:"Μετοχές, ομόλογα και αμοιβαία κεφάλαια",prop:"Ακίνητα",biz:"Επιχειρηματικά συμφέροντα",priv:"Ιδιωτικές επενδύσεις",pens:"Συντάξεις και ασφάλειες",debt:"Χρέη και υποχρεώσεις",other:"Άλλο"}},
  ws:{h:"Σε τι χρησιμεύει πραγματικά ένα περιουσιακό στοιχείο;", lead:"Διαλέξτε μια κατηγορία από την απογραφή σας. Η τιμή αγοράς είναι ένα μέρος της αξίας· αυτό το φύλλο καταγράφει τα υπόλοιπα. Δεν προτείνει διατήρηση, πώληση ή αναδιάρθρωση.",
     pick:"Κατηγορία", none:"Επιλέξτε κατηγορία", contributes:"Τι προσφέρει σε εσάς και σε άλλους", costs:"Γνωστά κόστη (συντήρηση, φόροι, αμοιβές)", lost:"Τι μπορεί να χαθεί αν πουληθεί", gained:"Τι μπορεί να κερδηθεί", unknown:"Τι παραμένει άγνωστο"},
  q:{h:"Ερωτήσεις προς επαγγελματία", lead:"Επιλέξτε όσες θέλετε να ρωτήσετε. Μπαίνουν στο ενημερωτικό σας σημείωμα. Είναι γενικές ερωτήσεις, όχι συμβουλές.",
     list:["Ποιες υπηρεσίες είστε εξουσιοδοτημένος να παρέχετε και πού μπορώ να το επαληθεύσω;","Συμβουλεύετε, διαχειρίζεστε, εκτελείτε, φυλάσσετε περιουσιακά στοιχεία ή συντονίζετε άλλους;","Πώς αμείβεστε, συμπεριλαμβανομένων προμηθειών ή πληρωμών από τρίτους;","Ποια προϊόντα και ποιους παρόχους μπορείτε να εξετάσετε και ποιοι περιορισμοί ισχύουν;","Ποιες πληροφορίες χρειάζεστε και πώς θα τις προστατεύσετε;","Ποιο είναι το εκτιμώμενο συνολικό κόστος και ποιες οι βασικές παραδοχές;","Ποιος φυλάσσει τα περιουσιακά στοιχεία, πώς αναφέρονται και τι συμβαίνει αν αποτύχει μια εταιρεία;","Πώς αντιμετωπίζονται τα παράπονα, οι συγκρούσεις, η λύση της συνεργασίας και η μεταφορά;","Ποια θέματα χρειάζονται δικηγόρο, λογιστή ή φοροτεχνικό;","Πώς θα ληφθούν υπόψη οι μη χρηματοοικονομικοί μας στόχοι και τα διαφορετικά οικογενειακά συμφέροντα;"],
     add:"Προσθέστε δική σας ερώτηση", ph:"Πληκτρολογήστε μια ερώτηση", addBtn:"Προσθήκη"},
  r:{h:"Ποιος κάνει τι", lead:"Οι ρόλοι διαφέρουν ανά χώρα, εξουσιοδότηση και υπηρεσία. Το «πιστοποιημένος» δεν είναι μία κατηγορία: ζητήστε τις ακριβείς άδειες και ελέγξτε τες στο επίσημο μητρώο ή στον επαγγελματικό φορέα.",
     cards:[["Διαχειριστής περιουσίας ή επενδυτικός σύμβουλος","Μπορεί να συμβουλεύει, να διαχειρίζεται χαρτοφυλάκια ή να εκτελεί εντολές, ανάλογα με την εξουσιοδότηση. Ρωτήστε πώς αμείβεται και ποιος φυλάσσει τα περιουσιακά στοιχεία."],["Δικηγόρος","Συντάσσει και ελέγχει διαθήκες, έγγραφα διαδοχής, εταιρικές και οικογενειακές ρυθμίσεις. Ρωτήστε για ποια δικαιοδοσία συμβουλεύει."],["Φοροτεχνικός ή λογιστής","Εξηγεί τις φορολογικές υποχρεώσεις και συνέπειες για τη δική σας περίπτωση. Ζητήστε γραπτές απαντήσεις."],["Family office","Συντονίζει πολλούς επαγγελματίες για μια οικογένεια. Ρωτήστε για λογαριασμό ποιου εργάζεται και πώς αμείβεται."],["Τράπεζα ή θεματοφύλακας","Φυλάσσει περιουσιακά στοιχεία και αναφέρει γι' αυτά. Ρωτήστε ποιες προστασίες ισχύουν για τη δική σας ρύθμιση."]],
     note:"Οι ελληνικές και ευρωπαϊκές ιδιαιτερότητες πρέπει να ελεγχθούν από εξειδικευμένους νομικούς πριν από οποιαδήποτε δημόσια έκδοση."},
  b:{h:"Το ενημερωτικό σας σημείωμα για επαγγελματία", lead:"Εσείς αποφασίζετε τι θα περιλαμβάνει. Κάθε γραμμή φέρει την ένδειξη ότι είναι δική σας δήλωση· η πλατφόρμα δεν την έχει επαληθεύσει. Δεν αποτελεί αξιολόγηση καταλληλότητας.",
     inc:"Να περιληφθεί στο σημείωμα", s:{a1:"Σκοπός",a2:"Πόροι και υποχρεώσεις",a3:"Πρόσωπα και αποφάσεις",a4:"Ερωτήσεις προς τον επαγγελματία",a5:"Σημαντικοί περιορισμοί"},
     up:"δήλωση χρήστη", empty:"(δεν έχει συμπληρωθεί)", lim:"Το έγγραφο περιέχει πληροφορίες που παρέσχε ο χρήστης και εκπαιδευτικούς προβληματισμούς. Δεν έχει επαληθευτεί από την πλατφόρμα, δεν αποτελεί αξιολόγηση καταλληλότητας και δεν αντικαθιστά τις ευθύνες του ίδιου του επαγγελματία.",
     horizon:"Χρονικοί ορίζοντες", conflict:"Πιθανές συγκρούσεις μεταξύ σκοπών", unknowns:"Άγνωστα ή στα χέρια άλλων", title:"Ενημερωτικό σημείωμα για επαγγελματία (σχέδιο)", textLabel:"Απλό κείμενο"},
  l:{h:"Ο Οικονομικός σας Λόγος (σχέδιο)", lead:"Ένας ζωντανός απολογισμός των σκοπών, των γνώσεων, των δεσμεύσεων και των ερωτήσεών σας. Επεξεργαστείτε οποιαδήποτε ενότητα. Μπορείτε να εξαγάγετε και ημιτελές σχέδιο.",
     assemble:"Συμπλήρωση κενών ενοτήτων από τις καταχωρίσεις μου",
     s:{recv:"Όσα έχω λάβει ή μπορεί να λάβω",know:"Όσα γνωρίζω και πρέπει να μάθω",purpose:"Σε τι χρησιμεύουν οι πόροι μου",principles:"Οι αρχές μου για τις αποφάσεις και πιθανές συγκρούσεις",owed:"Πρόσωπα στα οποία ίσως οφείλω λογοδοσία",family:"Οικογενειακά ζητήματα και διαδοχή",next:"Τα επόμενα βήματά μου"},
     review:"Ημερομηνία αναθεώρησης", title:"Οικονομικός Λόγος (σχέδιο)", note:"Δεν αποτελεί διαθήκη, πληρεξούσιο ή άλλο νομικό έγγραφο."},
  rd:{h:"Λίστα προετοιμασίας", note:"Μόνο περιγραφική. Δεν εμποδίζει ποτέ μια εξαγωγή ή την επικοινωνία με επαγγελματία.",
      c:{purpose:"Σκοπός",info:"Πληροφορίες",literacy:"Βασική εγγραμματοσύνη",family:"Οικογενειακά ζητήματα",pro:"Συνεργασία με επαγγελματία"},
      s:{completed:"Ολοκληρώθηκε",progress:"Σε εξέλιξη",unknown:"Άγνωστο",na:"Δεν ισχύει"}},
  foot:["Γενικό εκπαιδευτικό περιεχόμενο και εργαλεία αναστοχασμού. Δεν διαχειρίζεται περιουσία ούτε εκτελεί συναλλαγές και δεν υποκαθιστά εξατομικευμένη επενδυτική, νομική, φορολογική ή άλλη επαγγελματική συμβουλή.","Οι πληροφορίες που καταχωρίζετε δεν επαληθεύονται. Οι νόμοι και οι συνθήκες διαφέρουν και αλλάζουν. Η ειδοποίηση αυτή είναι σχέδιο προς έλεγχο από εξειδικευμένους νομικούς.","Tekmerion (εταιρεία υπό σύσταση) · Βασισμένο στο βιβλίο του Καθηγητή Δημητρίου Θωμάκου · Επικεφαλής τεχνικής υλοποίησης: Αντώνιος Βλάχος"],
  sample:{for:"Να παραμείνει το πατρικό σπίτι διαθέσιμο στα παιδιά μου, να χρηματοδοτηθούν οι σπουδές τους και να μείνει χώρος για μια δική μου επιχείρηση.",horizon:"Τα επόμενα 3 χρόνια για τα έξοδα σπουδών· 15 χρόνια για το σπίτι και μια πιθανή επιχείρηση.",conflict:"Η διατήρηση του σπιτιού μπορεί να περιορίσει τα χρήματα για την επιχείρηση.",people:"Η μητέρα μου κατέχει το σπίτι. Ο αδελφός μου κι εγώ είμαστε συνιδιοκτήτες της οικογενειακής εταιρείας. Ο λογιστής μας συντάσσει τις φορολογικές δηλώσεις.",
          given:{fin:"Ποσοστό σε οικογενειακή εταιρεία.",prop:"Ένα πατρικό σπίτι που ίσως κληρονομήσουμε.",edu:"Σπουδές στο εξωτερικό, εν μέρει από τους γονείς μου.",net:"Επαγγελματικές γνωριμίες που έχτισε ο πατέρας μου.",opp:"Θέση στην οικογενειακή εταιρεία.",sec:"Ένα σταθερό σπίτι στα παιδικά μου χρόνια."},
          inv:{cash:["known","b","Λογαριασμός ταμιευτηρίου"],sec:["unk","","Δεν ξέρω τι κατέχει η μητέρα μου"],prop:["held","d","Το σπίτι ανήκει στη μητέρα μου"],biz:["est","c","Ποσοστό στην οικογενειακή εταιρεία"],priv:["na","",""],pens:["unk","","Πρέπει να ρωτήσω"],debt:["known","a","Μικρό δάνειο"],other:["pref","",""]},
          ws:{cat:"prop",contributes:"Εκεί συγκεντρώνεται η οικογένεια· χώρος για τα παιδιά μου.",costs:"Συντήρηση και ετήσιοι φόροι ακινήτων.",lost:"Η οικογενειακή ιστορία και ένας κοινός χώρος.",gained:"Μετρητά που θα χρηματοδοτούσαν την επιχείρηση.",unknown:"Η τρέχουσα αξία του και οι επιθυμίες της μητέρας μου."},
          q:[0,1,2,5,6,8], custom:["Πώς θα χειριζόσασταν μια διαφωνία ανάμεσα στον αδελφό μου και σε εμένα;"],
          logos:{review:"2027-03-01"}}
}};

/* ---------- State ---------- */
const STEPS=["welcome","urgent","purpose","given","inventory","worksheet","questions","roles","briefing","logos"];
const GIVEN=["fin","prop","edu","net","opp","sec"];
const CATS=["cash","sec","prop","biz","priv","pens","debt","other"];
const KEY="logoi-demo-v1";
const blank=()=>({lang:"en",step:0,routes:[],urgent:[],purpose:{for:"",horizon:"",conflict:"",people:""},given:{fin:"",prop:"",edu:"",net:"",opp:"",sec:""},inv:{},ws:{cat:"",contributes:"",costs:"",lost:"",gained:"",unknown:""},q:{checked:[],custom:[]},inc:{a1:true,a2:true,a3:true,a4:true,a5:true},logos:{recv:"",know:"",purpose:"",principles:"",owed:"",family:"",next:"",review:""},visited:{}});
let S=blank(), armedReset=false, toastTimer=0;
function load(){try{const r=localStorage.getItem(KEY);if(r){const o=JSON.parse(r);S=Object.assign(blank(),o);}}catch(e){}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
const T=()=>I18N[S.lang];
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function setPath(path,val){const p=path.split(".");let o=S;for(let i=0;i<p.length-1;i++){if(typeof o[p[i]]!=="object"||o[p[i]]===null)o[p[i]]={};o=o[p[i]];}o[p[p.length-1]]=val;}
function getPath(path){return path.split(".").reduce((o,k)=>o==null?undefined:o[k],S);}
function toast(m){const t=document.getElementById("toast");t.textContent=m;t.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>{t.hidden=true;},2600);}
const val=p=>esc(getPath(p)||"");
const ta=(p,ph)=>`<textarea data-bind="${p}" placeholder="${esc(ph||"")}">${val(p)}</textarea>`;

/* ---------- Readiness (descriptive only) ---------- */
function readiness(){
  const p=S.purpose, filled=Object.values(p).filter(x=>x&&x.trim()).length;
  const marked=CATS.filter(c=>S.inv[c]&&S.inv[c].status).length;
  const fam=S.routes.includes("inherit")||S.routes.includes("family");
  return {
    purpose:(p.for||"").trim().length>10?"completed":filled?"progress":"unknown",
    info:marked>=4?"completed":marked?"progress":"unknown",
    literacy:S.visited.roles?"completed":"unknown",
    family:(p.people||"").trim()?"completed":fam?"unknown":"na",
    pro:S.q.checked.length>=3?"completed":(S.q.checked.length||S.q.custom.length)?"progress":"unknown"
  };
}
function checklist(){
  const t=T().rd, r=readiness();
  return `<div class="check"><h3>${t.h}</h3><div class="pills">${Object.keys(t.c).map(k=>`<span class="pill ${r[k]}">${t.c[k]}: ${t.s[r[k]]}</span>`).join("")}</div><p class="hint" style="margin:6px 0 0">${t.note}</p></div>`;
}

/* ---------- Briefing and Logos text ---------- */
const lab=s=>/[?]$/.test(s)?s+" ":s+": ";
function briefing(){
  const t=T(), b=t.b, e=b.empty, up=` [${b.up}]`;
  const line=(label,v)=>(v&&v.trim())?{label,v:v.trim()}:null;
  const secs=[];
  if(S.inc.a1)secs.push([b.s.a1,[line(t.p.for,S.purpose.for),line(b.horizon,S.purpose.horizon),line(b.conflict,S.purpose.conflict)].filter(Boolean)]);
  if(S.inc.a2){
    const rows=CATS.filter(c=>S.inv[c]&&S.inv[c].status&&!["na","pref"].includes(S.inv[c].status)).map(c=>{const x=S.inv[c];return {label:t.i.cats[c],v:[t.i.st[x.status],x.range?t.i.rg[x.range]:"",x.note||""].filter(Boolean).join(" · ")};});
    if(S.ws.cat&&(S.ws.contributes||S.ws.costs||S.ws.lost||S.ws.gained||S.ws.unknown)){
      rows.push({label:t.ws.h+" ("+t.i.cats[S.ws.cat]+")",v:[S.ws.contributes,S.ws.costs,S.ws.lost,S.ws.gained,S.ws.unknown].filter(x=>x&&x.trim()).join(" | ")});
    }
    secs.push([b.s.a2,rows]);
  }
  if(S.inc.a3)secs.push([b.s.a3,[line(t.p.people,S.purpose.people)].filter(Boolean)]);
  if(S.inc.a4){
    const qs=S.q.checked.map(i=>({label:"",v:t.q.list[i]})).concat(S.q.custom.map(x=>({label:"",v:x})));
    secs.push([b.s.a4,qs]);
  }
  const plain=[b.title,""].concat(secs.flatMap(([h,rows])=>["## "+h].concat(rows.length?rows.map(r=>"- "+(r.label?lab(r.label):"")+r.v+(h===b.s.a4?"":up)):["- "+e]).concat([""])));
  if(S.inc.a5)plain.push("## "+b.s.a5,b.lim);
  const html=[`<h3>${esc(b.title)}</h3>`].concat(secs.map(([h,rows])=>`<h3>${esc(h)}</h3>`+(rows.length?`<ul>${rows.map(r=>`<li>${r.label?`<b>${esc(lab(r.label).trim())}</b> `:""}${esc(r.v)}${h===b.s.a4?"":` <span class="up">[${esc(b.up)}]</span>`}</li>`).join("")}</ul>`:`<p class="up">${esc(e)}</p>`)));
  if(S.inc.a5)html.push(`<h3>${esc(b.s.a5)}</h3><p>${esc(b.lim)}</p>`);
  return {html:html.join(""),text:plain.join("\n")};
}
function logosText(){
  const t=T().l, L=S.logos, keys=["recv","know","purpose","principles","owed","family","next"];
  return [t.title,""].concat(keys.flatMap(k=>["## "+t.s[k],(L[k]||"").trim()||"-",""])).concat([`## ${t.review}`,L.review||"-","",t.note]).join("\n");
}
function assemble(){
  const t=T(), L=S.logos;
  const given=GIVEN.filter(k=>S.given[k].trim()).map(k=>t.g.items[k]+": "+S.given[k].trim()).join("\n");
  const unknown=CATS.filter(c=>S.inv[c]&&["unk","held"].includes(S.inv[c].status)).map(c=>t.i.cats[c]+" ("+t.i.st[S.inv[c].status]+")").join("\n");
  const fill=(k,v)=>{if(!(L[k]||"").trim()&&v)L[k]=v;};
  fill("recv",given); fill("know",unknown); fill("purpose",S.purpose.for.trim());
  fill("principles",S.purpose.conflict.trim()); fill("owed",S.purpose.people.trim());
  fill("next",S.q.checked.length?t.q.list[S.q.checked[0]]:"");
  save();
}

/* ---------- Screens ---------- */
const SCREEN={
welcome(){const t=T().w;return `<h1>${t.h}</h1><p class="lead">${t.lead}</p>
  <div class="lbl">${t.routes}</div>${Object.keys(t.r).map(k=>`<label class="opt ${S.routes.includes(k)?"sel":""}"><input type="checkbox" data-arr="routes" data-val="${k}" ${S.routes.includes(k)?"checked":""}><span>${t.r[k]}</span></label>`).join("")}
  <div class="nav"><button class="btn" data-act="sample">${t.sample}</button><button class="btn primary" data-act="next">${t.start}</button></div>
  <p class="hint" style="margin-top:14px">${t.note}</p>`;},
urgent(){const t=T().u, any=S.urgent.length>0;return `<h2>${t.h}</h2><p class="lead">${t.lead}</p>
  ${t.items.map((x,i)=>`<label class="opt ${S.urgent.includes(i)?"sel":""}"><input type="checkbox" data-arr="urgent" data-val="${i}" ${S.urgent.includes(i)?"checked":""}><span>${x}</span></label>`).join("")}
  ${any?`<div class="alert" role="alert"><b>!</b> ${t.alert}</div>`:""}`;},
purpose(){const t=T().p;return `<h2>${t.h}</h2><p class="lead">${t.lead}</p>
  <label for="f1">${t.for}</label>${ta("purpose.for").replace("<textarea","<textarea id=\"f1\"")}
  <label for="f2">${t.horizon}</label>${ta("purpose.horizon").replace("<textarea","<textarea id=\"f2\"")}
  <label for="f3">${t.conflict}</label>${ta("purpose.conflict").replace("<textarea","<textarea id=\"f3\"")}
  <label for="f4">${t.people} <span class="hint">${t.peopleHint}</span></label>${ta("purpose.people").replace("<textarea","<textarea id=\"f4\"")}`;},
given(){const t=T().g;return `<h2>${t.h}</h2><p class="lead">${t.lead}</p>${GIVEN.map(k=>`<label for="g_${k}">${t.items[k]}</label><textarea id="g_${k}" data-bind="given.${k}" placeholder="${esc(t.ph)}" style="min-height:60px">${val("given."+k)}</textarea>`).join("")}`;},
inventory(){const t=T().i;return `<h2>${t.h}</h2><p class="lead">${t.lead}</p>${CATS.map(c=>{const x=S.inv[c]||{};return `<div class="row"><div><h3>${t.cats[c]}</h3></div><div class="ctl">
  <div><span class="hint">${t.status}</span><select aria-label="${esc(t.cats[c]+" - "+t.status)}" data-bind="inv.${c}.status">${Object.keys(t.st).map(k=>`<option value="${k}" ${(x.status||"")===k?"selected":""}>${t.st[k]}</option>`).join("")}</select></div>
  <div><span class="hint">${t.range}</span><select aria-label="${esc(t.cats[c]+" - "+t.range)}" data-bind="inv.${c}.range">${Object.keys(t.rg).map(k=>`<option value="${k}" ${(x.range||"")===k?"selected":""}>${t.rg[k]}</option>`).join("")}</select></div>
  <div style="grid-column:1/-1"><input type="text" aria-label="${esc(t.cats[c]+" - "+t.note)}" placeholder="${esc(t.note)}" data-bind="inv.${c}.note" value="${esc(x.note||"")}"></div></div></div>`;}).join("")}`;},
worksheet(){const t=T().ws, ti=T().i;return `<h2>${t.h}</h2><p class="lead">${t.lead}</p>
  <label for="ws_cat">${t.pick}</label><select id="ws_cat" data-bind="ws.cat"><option value="">${t.none}</option>${CATS.map(c=>`<option value="${c}" ${S.ws.cat===c?"selected":""}>${ti.cats[c]}</option>`).join("")}</select>
  ${["contributes","costs","lost","gained","unknown"].map(k=>`<label for="ws_${k}">${t[k]}</label><textarea id="ws_${k}" data-bind="ws.${k}" style="min-height:64px">${val("ws."+k)}</textarea>`).join("")}`;},
questions(){const t=T().q;return `<h2>${t.h}</h2><p class="lead">${t.lead}</p>
  ${t.list.map((x,i)=>`<label class="opt ${S.q.checked.includes(i)?"sel":""}"><input type="checkbox" data-arr="q.checked" data-val="${i}" ${S.q.checked.includes(i)?"checked":""}><span>${x}</span></label>`).join("")}
  ${S.q.custom.map((x,i)=>`<div class="opt sel"><span style="flex:1">${esc(x)}</span><button class="btn" data-act="delq:${i}" aria-label="x">×</button></div>`).join("")}
  <label for="newq">${t.add}</label><div style="display:flex;gap:8px"><input type="text" id="newq" placeholder="${esc(t.ph)}"><button class="btn" data-act="addq">${t.addBtn}</button></div>`;},
roles(){const t=T().r;return `<h2>${t.h}</h2><p class="lead">${t.lead}</p><div class="cards">${t.cards.map(c=>`<div class="c"><h3>${c[0]}</h3><p>${c[1]}</p></div>`).join("")}</div><p class="hint" style="margin-top:14px">${t.note}</p>`;},
briefing(){const t=T().b, o=briefing();return `<h2>${t.h}</h2><p class="lead">${t.lead}</p>
  <div class="lbl">${t.inc}</div><div class="chips">${Object.keys(t.s).map(k=>`<label class="opt ${S.inc[k]?"sel":""}" style="margin:0"><input type="checkbox" data-inc="${k}" ${S.inc[k]?"checked":""}><span>${t.s[k]}</span></label>`).join("")}</div>
  <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap"><button class="btn primary" data-act="copy:b">${T().copy}</button><button class="btn" data-act="dl:b">${T().download}</button></div>
  <div class="out" id="out_b">${o.html}</div>
  <label for="plain_b">${t.textLabel}</label><textarea id="plain_b" readonly style="min-height:110px">${esc(o.text)}</textarea>`;},
logos(){const t=T().l;return `<h2>${t.h}</h2><p class="lead">${t.lead}</p>
  <button class="btn" data-act="assemble">${t.assemble}</button>
  ${["recv","know","purpose","principles","owed","family","next"].map(k=>`<label for="l_${k}">${t.s[k]}</label><textarea id="l_${k}" data-bind="logos.${k}" style="min-height:64px">${val("logos."+k)}</textarea>`).join("")}
  <label for="l_rev">${t.review}</label><input type="date" id="l_rev" data-bind="logos.review" value="${esc(S.logos.review)}">
  <p class="hint">${t.note}</p>
  <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap"><button class="btn primary" data-act="copy:l">${T().copy}</button><button class="btn" data-act="dl:l">${T().download}</button></div>`;}
};

/* ---------- Render ---------- */
function render(focus){
  const t=T(), id=STEPS[S.step];
  S.visited[id]=true;
  document.documentElement.lang=S.lang==="el"?"el":"en";
  document.title=t.app+" Demo";
  document.getElementById("banner").textContent=t.banner;
  document.getElementById("brand").innerHTML=`${esc(t.app)}<small>${esc(t.sub)}</small>`;
  document.getElementById("tools").innerHTML=`<span role="group" aria-label="Language"><button class="btn ${S.lang==="en"?"on":""}" data-act="lang:en">EN</button> <button class="btn ${S.lang==="el"?"on":""}" data-act="lang:el">EL</button></span>
    <button class="btn primary" data-act="export">${t.exportNow}</button><button class="btn" data-act="reset">${armedReset?t.resetConfirm:t.reset}</button>`;
  document.getElementById("rail").innerHTML=STEPS.map((k,i)=>`<button data-act="goto:${i}" ${i===S.step?'aria-current="step"':""}><span class="n">${i+1}</span>${esc(t.steps[k])}</button>`).join("");
  const nav=id==="welcome"?"":`<div class="nav"><button class="btn" data-act="prev">${t.back}</button>${S.step<STEPS.length-1?`<button class="btn primary" data-act="next">${t.next}</button>`:""}</div>`;
  document.getElementById("main").innerHTML=`<div class="card">${SCREEN[id]()}${nav}${checklist()}</div>`;
  document.getElementById("foot").innerHTML=t.foot.map(x=>`<p>${esc(x)}</p>`).join("");
  if(focus){const m=document.getElementById("main");m.focus({preventScroll:true});window.scrollTo(0,0);}
  save();
}
function go(i){S.step=Math.max(0,Math.min(STEPS.length-1,i));armedReset=false;render(true);}
function toggleArr(path,v){const a=getPath(path)||[];const n=a.includes(v)?a.filter(x=>x!==v):a.concat([v]);setPath(path,n);}
async function copyText(txt,srcId){
  try{await navigator.clipboard.writeText(txt);toast(T().copied);}
  catch(e){const el=document.getElementById(srcId);if(el){el.focus();el.select();}toast(T().copyFail);}
}
function download(name,txt){
  try{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([txt],{type:"text/markdown"}));a.download=name;document.body.appendChild(a);a.click();a.remove();toast(T().downloaded);}
  catch(e){toast(T().copyFail);}
}
function loadSample(){
  const s=T().sample;
  S.routes=["inherit","wealth","pro"]; S.urgent=[];
  S.purpose={for:s.for,horizon:s.horizon,conflict:s.conflict,people:s.people};
  S.given=Object.assign({},s.given);
  S.inv={}; CATS.forEach(c=>{const v=s.inv[c];S.inv[c]={status:v[0],range:v[1],note:v[2]};});
  S.ws=Object.assign({},s.ws);
  S.q={checked:s.q.slice(),custom:s.custom.slice()};
  S.logos=Object.assign({recv:"",know:"",purpose:"",principles:"",owed:"",family:"",next:"",review:""},s.logos);
  save(); render(false); toast(T().sampleLoaded);
}

document.addEventListener("click",ev=>{
  const b=ev.target.closest("[data-act]"); if(!b)return;
  const [act,arg]=b.dataset.act.split(":");
  if(act==="next")go(S.step+1);
  else if(act==="prev")go(S.step-1);
  else if(act==="goto")go(+arg);
  else if(act==="export")go(STEPS.indexOf("briefing"));
  else if(act==="lang"){S.lang=arg;render(false);}
  else if(act==="sample")loadSample();
  else if(act==="reset"){if(!armedReset){armedReset=true;render(false);return;}const lang=S.lang;S=blank();S.lang=lang;armedReset=false;render(true);toast(T().erased);}
  else if(act==="addq"){const el=document.getElementById("newq");const v=el.value.trim();if(v){S.q.custom.push(v);render(false);}}
  else if(act==="delq"){S.q.custom.splice(+arg,1);render(false);}
  else if(act==="assemble"){assemble();render(false);}
  else if(act==="copy"){copyText(arg==="b"?briefing().text:logosText(),arg==="b"?"plain_b":"");}
  else if(act==="dl"){download(arg==="b"?"professional-briefing-draft.md":"oikonomikos-logos-draft.md",arg==="b"?briefing().text:logosText());}
});
function refreshCheck(){const c=document.querySelector(".check");if(c)c.outerHTML=checklist();}
document.addEventListener("input",ev=>{
  const el=ev.target; if(el.dataset&&el.dataset.bind){setPath(el.dataset.bind,el.value);save();refreshCheck();}
});
document.addEventListener("change",ev=>{
  const el=ev.target;
  if(el.dataset.arr){toggleArr(el.dataset.arr,/^\d+$/.test(el.dataset.val)?+el.dataset.val:el.dataset.val);render(false);}
  else if(el.dataset.inc){S.inc[el.dataset.inc]=el.checked;render(false);}
  else if(el.dataset.bind){setPath(el.dataset.bind,el.value);save();refreshCheck();}
});
document.addEventListener("keydown",ev=>{
  if(ev.key==="Enter"&&ev.target.id==="newq"){ev.preventDefault();document.querySelector('[data-act="addq"]').click();}
});
load(); render(false);
