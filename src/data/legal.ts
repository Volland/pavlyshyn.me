// Legal identity, used by /impressum, /agb and /privacy.
//
// NOTE: `legalName` is the German transliteration and must match the name on
// the Gewerbeanmeldung / Meldebescheinigung exactly. It deliberately differs
// from the professional name used everywhere else on the site.
// TODO(volodymyr): confirm the spelling — Павлишин usually transliterates to
// "Pawlyschyn" in German. Confirm before publishing.

export const legal = {
  legalName: 'Wolodymyr Pawlyschy',
  street: 'Franz-Jacob-Str. 1',
  postcode: '10369',
  city: 'Berlin',
  country: 'Deutschland',
  email: 'pavlyshyn@gmail.com',
  // Optional. Leave empty if you are a Kleinunternehmer under § 19 UStG —
  // the VAT section is then omitted from /impressum automatically.
  vatId: '',
  // Optional but recommended by § 5 DDG; leave empty to omit.
  phone: '',
};

export const legalAddressLines = [
  legal.legalName,
  legal.street,
  `${legal.postcode} ${legal.city}`,
  legal.country,
];
