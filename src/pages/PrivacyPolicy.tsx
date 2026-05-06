import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PageTransition from '@/components/ui/PageTransition'
import {
  LAST_UPDATED,
  DEFINITIONS,
  APP_DATA_COLLECTION,
  type AppType,
  COOKIE_TYPES,
  THIRD_PARTY_PROVIDERS,
  CCPA_CATEGORIES,
  GDPR_RIGHTS,
  CCPA_RIGHTS,
  DATA_USE_PURPOSES,
  DATA_SHARING,
  LEGAL_DISCLOSURE_REASONS,
  CONTACT_INFO,
} from '@/lib/privacyPolicyData'

// ── Typographic helpers ──────────────────────────────────────────────────────

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-teal-400 mt-10 mb-3 pb-2 border-b border-slate-700">
    {children}
  </h2>
)

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mt-6 mb-2">
    {children}
  </h3>
)

const H4 = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-sm sm:text-base font-semibold text-slate-300 mt-4 mb-2">
    {children}
  </h4>
)

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-4">{children}</p>
)

const Ul = ({ children }: { children: React.ReactNode }) => (
  <ul className="pl-5 space-y-2 text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
    {children}
  </ul>
)

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-2">
    <span className="text-teal-400 shrink-0 mt-0.5">›</span>
    <span>{children}</span>
  </li>
)

// ── Reusable table ────────────────────────────────────────────────────────────

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-xs sm:text-sm border-collapse">
        <thead>
          <tr className="border-b border-slate-700">
            {headers.map((h) => (
              <th key={h} className="text-left text-white font-semibold py-2 pr-4">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-800">
              {row.map((cell, j) => (
                <td key={j} className={`py-2 pr-4 align-top ${j === 0 ? 'text-teal-400 font-medium' : 'text-slate-400'}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Page component ────────────────────────────────────────────────────────────

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <Navbar />
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
        breadcrumb="Privacy Policy"
      />

      <section className="bg-dark-base py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <AnimatedSection>
            <div className="card-dark p-5 sm:p-8 md:p-10">

              <p className="text-xs text-slate-500 mb-6">Last updated: {LAST_UPDATED}</p>

              {/* ── Introduction ── */}
              <P>
                This Privacy Policy describes the policies and procedures of Arjava Technologies
                ("Company", "We", "Us", or "Our") on the collection, use, and disclosure of Your
                information when You use our Service. It also informs You of Your privacy rights and
                how the law protects You.
              </P>
              <P>
                We use Your Personal Data to provide and improve the Service. By using the Service,
                You agree to the collection and use of information in accordance with this Privacy Policy.
              </P>

              {/* ── 1. Interpretation and Definitions ── */}
              <H2>1. Interpretation and Definitions</H2>
              <H3>Interpretation</H3>
              <P>
                Words with an initial capital letter have meanings defined under the following
                conditions. These definitions apply equally whether the terms appear in singular or
                plural form.
              </P>
              <H3>Definitions</H3>
              <P>For the purposes of this Privacy Policy:</P>
              <dl className="space-y-3 mb-6">
                {DEFINITIONS.map(({ term, def }) => (
                  <div key={term} className="grid grid-cols-[minmax(0,auto)_1fr] gap-x-4 text-xs sm:text-sm">
                    <dt className="font-semibold text-teal-400 whitespace-nowrap">{term}</dt>
                    <dd className="text-slate-400 leading-relaxed">
                      {term === 'Website'
                        ? <>Arjava, accessible from{' '}
                            <a href="https://arjavatech.com" target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">
                              https://arjavatech.com
                            </a>
                          </>
                        : def}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* ── 2. Data We Collect ── */}
              <H2>2. Data We Collect — By Mobile Application</H2>
              <P>
                This section covers only the mobile applications developed and published by Arjava
                Technologies. For each application, we identify its name, explain how and for what
                purposes it is used, and specify exactly what data it collects from users, why that
                data is collected, where it is stored, and with whom it is shared. This section is
                updated whenever a new mobile application or mobile feature is introduced.
              </P>
              {APP_DATA_COLLECTION
                .filter(({ type }) => (type as AppType) === 'Mobile App' || (type as AppType) === 'Feature')
                .map(({ app, appUrl, description, purposes, fields, noLocationTracking }) => (
                <div key={app} className="mb-10 border border-slate-700 rounded-lg p-5 sm:p-6">

                  {/* App name + URL */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">{app}</h3>
                  {appUrl && (
                    <a
                      href={appUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-teal-400 hover:underline mb-3 inline-block"
                    >
                      {appUrl} ↗
                    </a>
                  )}

                  {/* Description */}
                  <P>{description}</P>

                  {/* Purposes */}
                  <H4>How and Why This Application Is Used</H4>
                  <Ul>
                    {purposes.map((p) => <Li key={p}>{p}</Li>)}
                  </Ul>

                  {/* Data collected */}
                  <H4>Data Collected</H4>
                  {noLocationTracking && (
                    <p className="text-xs sm:text-sm text-slate-400 mb-3">
                      🚫 No location tracking — this app does not track your location.
                    </p>
                  )}
                  {fields.length > 0 ? (
                    <DataTable
                      headers={['Data Collected', 'Purpose', 'Storage', 'Shared With']}
                      rows={fields.map(({ label, purpose, storage, sharedWith }) => [
                        label, purpose, storage, sharedWith,
                      ])}
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-slate-500 italic mb-4">
                      This application does not collect any personal data or user inputs.
                    </p>
                  )}
                </div>
              ))}

              {/* ── 3. Tracking Technologies and Cookies ── */}
              <H2>3. Tracking Technologies and Cookies</H2>
              <P>
                We use Cookies and similar tracking technologies (beacons, tags, and scripts) to
                track activity on Our Service and store certain information. Cookies may be
                "Session Cookies" (deleted when You close Your browser) or "Persistent Cookies"
                (remaining on Your device until they expire or You delete them).
              </P>
              <DataTable
                headers={['Cookie Type', 'Persistence', 'Purpose']}
                rows={COOKIE_TYPES.map(({ name, persistence, purpose }) => [name, persistence, purpose])}
              />
              <P>
                You can instruct Your browser to refuse all Cookies or to notify You when a Cookie
                is being sent. However, declining Cookies may limit Your ability to use certain
                features of our Service.
              </P>

              {/* ── 4. How We Use Your Data ── */}
              <H2>4. How We Use Your Personal Data</H2>
              <P>The Company may use Personal Data for the following purposes:</P>
              <Ul>
                {DATA_USE_PURPOSES.map(({ bold, rest }) => (
                  <Li key={bold}><strong>{bold}</strong>{rest}</Li>
                ))}
              </Ul>

              <H3>Sharing Your Personal Data</H3>
              <P>We may share Your personal information in the following circumstances:</P>
              <Ul>
                {DATA_SHARING.map(({ bold, rest }) => (
                  <Li key={bold}><strong>{bold}</strong>{rest}</Li>
                ))}
              </Ul>

              {/* ── 5. Data Retention, Transfer & Deletion ── */}
              <H2>5. Data Retention, Transfer, and Deletion</H2>
              <H3>Retention</H3>
              <P>
                The Company retains Your Personal Data only for as long as necessary for the purposes
                set out in this Privacy Policy, and to the extent necessary to comply with legal
                obligations, resolve disputes, and enforce our agreements and policies. Usage Data is
                generally retained for a shorter period, except where it is used to strengthen
                security or improve the functionality of Our Service.
              </P>
              <H3>Transfer</H3>
              <P>
                Your information, including Personal Data, may be processed at the Company's operating
                offices or in any other location where the parties involved in processing are located.
                This may involve transfer to computers outside Your state, province, country, or other
                governmental jurisdiction where data protection laws may differ. Your consent to this
                Privacy Policy represents Your agreement to that transfer. The Company will take all
                steps reasonably necessary to ensure Your data is treated securely.
              </P>
              <H3>Deletion</H3>
              <P>
                You have the right to request deletion of the Personal Data We hold about You. You
                may update or delete Your information at any time through Your Account settings, or
                by contacting Us directly. Please note that We may need to retain certain information
                where We have a legal obligation or lawful basis to do so.
              </P>

              {/* ── 6. Disclosure of Your Personal Data ── */}
              <H2>6. Disclosure of Your Personal Data</H2>
              <H4>Business Transactions</H4>
              <P>
                If the Company is involved in a merger, acquisition, or asset sale, Your Personal
                Data may be transferred. We will provide notice before Your Personal Data becomes
                subject to a different Privacy Policy.
              </P>
              <H4>Law Enforcement</H4>
              <P>
                Under certain circumstances, the Company may be required to disclose Your Personal
                Data if required to do so by law or in response to valid requests by public
                authorities (e.g., a court or government agency).
              </P>
              <H4>Other Legal Requirements</H4>
              <P>The Company may disclose Your Personal Data in the good-faith belief that such action is necessary to:</P>
              <Ul>
                {LEGAL_DISCLOSURE_REASONS.map((item) => <Li key={item}>{item}</Li>)}
              </Ul>
              <H4>Security of Your Personal Data</H4>
              <P>
                The security of Your Personal Data is important to Us. We strive to use commercially
                acceptable means to protect Your Personal Data; however, no method of transmission
                over the Internet or method of electronic storage is 100% secure, and We cannot
                guarantee absolute security.
              </P>

              {/* ── 7. Third-Party Service Providers ── */}
              <H2>7. Third-Party Service Providers</H2>
              <P>
                The Service Providers We use may have access to Your Personal Data. These third-party
                vendors collect, store, use, process, and transfer information about Your activity on
                Our Service in accordance with their own Privacy Policies.
              </P>
              <H3>Analytics</H3>
              <Ul>
                {THIRD_PARTY_PROVIDERS.map(({ name, description, policyUrl }) => (
                  <Li key={name}>
                    <strong>{name}</strong> — {description}{' '}
                    <a href={policyUrl} target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">
                      Privacy Policy ↗
                    </a>
                  </Li>
                ))}
              </Ul>

              {/* ── 8. GDPR Privacy Rights ── */}
              <H2>8. GDPR Privacy Rights (European Union)</H2>
              <P>
                If You are located within the European Union, the Company is committed to respecting
                the confidentiality of Your Personal Data and ensuring You can exercise the following
                rights:
              </P>
              <Ul>
                {GDPR_RIGHTS.map(({ right, description }) => (
                  <Li key={right}><strong>{right}</strong>: {description}</Li>
                ))}
              </Ul>
              <P>
                To exercise any of these rights, please contact Us. We may ask You to verify Your
                identity before responding. You also have the right to lodge a complaint with a Data
                Protection Authority regarding Our collection and use of Your Personal Data.
              </P>

              {/* ── 9. CCPA/CPRA Privacy Rights ── */}
              <H2>9. CCPA/CPRA Privacy Rights (California Residents)</H2>
              <P>
                This section supplements the information in Our Privacy Policy and applies solely to
                visitors, users, and others who reside in the State of California.
              </P>
              <H3>Categories of Personal Information Collected</H3>
              <DataTable
                headers={['Category', 'Examples']}
                rows={CCPA_CATEGORIES.map(({ cat, ex }) => [cat, ex])}
              />
              <H3>Your Rights under the CCPA/CPRA</H3>
              <Ul>
                {CCPA_RIGHTS.map(({ right, description }) => (
                  <Li key={right}><strong>{right}</strong>: {description}</Li>
                ))}
              </Ul>
              <H3>"Do Not Track" Policy (CalOPPA)</H3>
              <P>
                Our Service does not respond to Do Not Track signals. However, some third-party
                websites do track browsing activities. You can set Your browser preferences to inform
                websites that You do not want to be tracked.
              </P>
              <H3>California's Shine the Light Law</H3>
              <P>
                Under California Civil Code Section 1798, California residents with an established
                business relationship with Us may request, once per year, information about sharing
                their Personal Data with third parties for those parties' direct marketing purposes.
              </P>
              <H3>California Privacy Rights for Minor Users</H3>
              <P>
                Under California Business and Professions Code Section 22581, California residents
                under the age of 18 who are registered users of online sites, services, or
                applications may request removal of content or information they have publicly posted.
              </P>

              {/* ── 10. Children's Privacy ── */}
              <H2>10. Children's Privacy</H2>
              <P>
                Our Service is not directed to anyone under the age of 13. We do not knowingly
                collect personally identifiable information from children under 13. If You are a
                parent or guardian and believe Your child has provided Us with Personal Data, please
                contact Us immediately so We can take appropriate action.
              </P>
              <P>
                Where We rely on consent as the legal basis for processing and Your country requires
                parental consent, We will obtain that consent before collecting or using the information.
              </P>

              {/* ── 11. Links to Other Websites ── */}
              <H2>11. Links to Other Websites</H2>
              <P>
                Our Service may contain links to third-party websites not operated by Us. Clicking a
                third-party link will direct You to that site. We strongly advise You to review the
                Privacy Policy of every site You visit. We have no control over, and assume no
                responsibility for, the content, privacy policies, or practices of any third-party
                sites or services.
              </P>

              {/* ── 12. Changes to This Privacy Policy ── */}
              <H2>12. Changes to This Privacy Policy</H2>
              <P>
                We may update this Privacy Policy from time to time. We will notify You of any
                material changes by posting the updated Privacy Policy on this page and, where
                appropriate, by sending You an email notification or displaying a prominent notice
                within Our Service prior to the change becoming effective. Continued use of the
                Service after changes are posted constitutes Your acceptance of the revised Policy.
              </P>

              {/* ── 13. Contact Us ── */}
              <H2>13. Contact Us</H2>
              <P>
                If You have any questions about this Privacy Policy or wish to exercise any of Your
                rights, please contact Us using the details below:
              </P>
              <div className="bg-dark-card border border-slate-700 rounded-lg p-5 space-y-2 text-sm">
                <p className="text-base font-semibold text-white">{CONTACT_INFO.company}</p>
                <p className="text-slate-400">{CONTACT_INFO.address}</p>
                <p className="text-slate-400">
                  Phone:{' '}
                  <a href={CONTACT_INFO.phoneHref} className="text-teal-400 hover:underline">
                    {CONTACT_INFO.phone}
                  </a>
                </p>
                <p className="text-slate-400">
                  Email:{' '}
                  <a href={CONTACT_INFO.emailHref} className="text-teal-400 hover:underline">
                    {CONTACT_INFO.email}
                  </a>
                </p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </PageTransition>
  )
}
