const categories = [
  {
    name: 'Σύστημα πέδισης',
    subcategories: [
      { name: 'Αμορτισέρ & Ελατήρια', },
      { name: 'Δισκόπλακες', },
      { name: 'Τακάκια & Σιαγώνες', },
    ]
  },
  {
    name: 'Ανταλλακτικά Κινητήρα',
    subcategories: [
      { name: 'Πολλαπλασιαστές' },
      { name: 'Μπουζοκαλόδια' },
      { name: 'Set Χρονισμού' },
      { name: 'Τρόμπες Νερού' },

    ]
  },
  {
    name: 'Φίλτρα',
    subcategories: [
      { name: 'Φίλτρα Καμπίνας' },
      { name: 'Φίλτρα Αέρα' },
      { name: 'Φίλτρα Λαδιού' },
      { name: 'Φίλτρα Καυσίμου' },
    ]
  },
  {
    name: 'Σύστημα Ψύψης',
    subcategories: [
      { name: 'Ψυγία' },
      { name: 'Κολλάρα' },
      { name: 'Βαλβίδες Θερμοστάτη' },
      { name: 'ΠαραΦλού' },
    ]
  },
  {
    name: 'Σύστημα Μετάδοσης',
    subcategories: [
      { name: 'Ψαλίδια' },
      { name: 'Ημιαξόνια' },
      { name: 'Μπιλιοφόροι' },
      { name: 'Ρουλεμάν Τροχών' }
    ]
  },
  {
    name: 'Διάφορα',
    subcategories: [
      { name: 'Υαλοκαθαριστήρες' },
      { name: 'Φλάτζες' },
      { name: 'Τσιμούχες' },
      { name: 'Αμορτισέρ Πορτ Παγκάζ' },
      { name: 'Μπαταρίες' },
    ]
  },
]


export const get = (event) => {
  console.log('GET index page')


  return {
    status: 200,
    body: {
      categories
    }
  }
}