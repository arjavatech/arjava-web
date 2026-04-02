import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/ui/PageHero'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PageTransition from '@/components/ui/PageTransition'

const Section = ({ title, level = 2 }: { title: string; level?: 2 | 3 | 4 }) => {
  if (level === 2)
    return <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-teal-400 mb-3 md:mb-4 mt-6 md:mt-8">{title}</h2>
  if (level === 3)
    return <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2 mt-4 md:mt-6">{title}</h3>
  return <h4 className="text-sm sm:text-base font-semibold text-slate-300 mb-2 mt-3">{title}</h4>
}

const BulletList = ({ children }: { children: React.ReactNode }) => (
  <ul className="pl-4 sm:pl-6 space-y-2 text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 md:mb-6">
    {children}
  </ul>
)

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-2">
    <span className="text-lg leading-none shrink-0">•</span>
    <div>{children}</div>
  </li>
)

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-3 md:mb-4">{children}</p>
)

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
              <p className="text-xs text-slate-500 mb-4 md:mb-6">Last updated: October 1, 2025</p>

              <P>
                This Privacy Policy describes Our policies and procedures on the collection, use and
                disclosure of Your information when You use the Service and tells You about Your privacy
                rights and how the law protects You.
              </P>
              <P>
                We use Your Personal data to provide and improve the Service. By using the Service, You
                agree to the collection and use of information in accordance with this Privacy Policy.
              </P>

              <Section title="Interpretation and Definitions" />
              <Section title="Interpretation" level={3} />
              <P>
                The words of which the initial letter is capitalized have meanings defined under the
                following conditions. The following definitions shall have the same meaning regardless of
                whether they appear in singular or in plural.
              </P>

              <Section title="Definitions" level={3} />
              <P>For the purposes of this Privacy Policy:</P>
              <BulletList>
                {[
                  { term: 'Account', def: 'means a unique account created for You to access our Service or parts of our Service.' },
                  { term: 'Affiliate', def: 'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.' },
                  { term: 'Business', def: 'for the purpose of CCPA/CPRA, refers to the Company as the legal entity that collects Consumers\' personal information and determines the purposes and means of the processing of Consumers\' personal information.' },
                  { term: 'CCPA and/or CPRA', def: 'refers to the California Consumer Privacy Act (the "CCPA") as amended by the California Privacy Rights Act of 2020 (the "CPRA").' },
                  { term: 'Company', def: '(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Arjava Technologies, ARJAVA INDIA TECH PRIVATE LIMITED 2135, 2024th pl ne, Sammamish, WA 98074. For the purpose of the GDPR, the Company is the Data Controller.' },
                  { term: 'Consumer', def: 'for the purpose of the CCPA/CPRA, means a natural person who is a California resident.' },
                  { term: 'Cookies', def: 'are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.' },
                  { term: 'Country', def: 'refers to: United States of America' },
                  { term: 'Data Controller', def: 'for the purposes of the GDPR (General Data Protection Regulation), refers to the Company as the legal person which alone or jointly with others determines the purposes and means of the processing of Personal Data.' },
                  { term: 'Device', def: 'means any device that can access the Service such as a computer, a cellphone or a digital tablet.' },
                  { term: 'Do Not Track', def: '(DNT) is a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.' },
                  { term: 'GDPR', def: 'refers to EU General Data Protection Regulation.' },
                  { term: 'Personal Data', def: 'is any information that relates to an identified or identifiable individual. For the purposes of GDPR, Personal Data means any information relating to You such as a name, an identification number, location data, online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity. For the purposes of the CCPA/CPRA, Personal Data means any information that identifies, relates to, describes or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.' },
                  { term: 'Service', def: 'refers to the Website.' },
                  { term: 'Service Provider', def: 'means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used. For the purpose of the GDPR, Service Providers are considered Data Processors.' },
                  { term: 'Usage Data', def: 'refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).' },
                  { term: 'You', def: 'means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable. Under GDPR, You can be referred to as the Data Subject or as the User as you are the individual using the Service.' },
                ].map(({ term, def }) => (
                  <Bullet key={term}>
                    <p><strong className="text-teal-400">{term}</strong> {def}</p>
                  </Bullet>
                ))}
                <Bullet>
                  <p>
                    <strong className="text-teal-400">Website</strong> refers to Arjava, accessible from{' '}
                    <a href="https://arjavatech.com" target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">
                      https://arjavatech.com
                    </a>
                  </p>
                </Bullet>
              </BulletList>

              <Section title="Collecting and Using Your Personal Data" />
              <Section title="Types of Data Collected" level={3} />
              <Section title="Personal Data" level={4} />
              <P>
                While using Our Service, We may ask You to provide Us with certain personally identifiable
                information that can be used to contact or identify You. Personally identifiable information
                may include, but is not limited to:
              </P>
              <BulletList>
                <Bullet><strong>Email address</strong></Bullet>
                <Bullet>
                  <div>
                    <strong>Camera Access</strong>
                    <p className="mt-1">
                      Our application requires access to the device's camera to enable facial recognition.
                      This feature is used solely for client-side operations, such as user authentication or
                      personalization. Images and facial recognition data captured by the camera are stored
                      only on the local device and are not transmitted or stored on our servers. No camera
                      data is shared with third parties or stored externally, ensuring the security and
                      privacy of your information.
                    </p>
                  </div>
                </Bullet>
                <Bullet><strong>Usage Data</strong></Bullet>
              </BulletList>

              <Section title="Usage Data" level={4} />
              <P>Usage Data is collected automatically when using the Service.</P>
              <P>
                Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP
                address), browser type, browser version, the pages of our Service that You visit, the time
                and date of Your visit, the time spent on those pages, unique device identifiers and other
                diagnostic data.
              </P>
              <P>
                When You access the Service by or through a mobile device, We may collect certain
                information automatically, including, but not limited to, the type of mobile device You use,
                Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating
                system, the type of mobile Internet browser You use, unique device identifiers and other
                diagnostic data.
              </P>
              <P>
                We may also collect information that Your browser sends whenever You visit our Service or
                when You access the Service by or through a mobile device.
              </P>

              <Section title="Tracking Technologies and Cookies" level={4} />
              <P>
                We use Cookies and similar tracking technologies to track the activity on Our Service and
                store certain information. Tracking technologies used are beacons, tags, and scripts to
                collect and track information and to improve and analyze Our Service. The technologies We
                use may include:
              </P>
              <BulletList>
                <Bullet>
                  <p><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.</p>
                </Bullet>
                <Bullet>
                  <p><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company to count users who have visited those pages or opened an email.</p>
                </Bullet>
              </BulletList>
              <P>
                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal
                computer or mobile device when You go offline, while Session Cookies are deleted as soon as
                You close Your web browser. We use both Session and Persistent Cookies for the purposes set
                out below:
              </P>
              <BulletList>
                {[
                  { name: 'Necessary / Essential Cookies', type: 'Session Cookies', purpose: 'These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features.' },
                  { name: 'Cookies Policy / Notice Acceptance Cookies', type: 'Persistent Cookies', purpose: 'These Cookies identify if users have accepted the use of cookies on the Website.' },
                  { name: 'Functionality Cookies', type: 'Persistent Cookies', purpose: 'These Cookies allow us to remember choices You make when You use the Website.' },
                  { name: 'Tracking and Performance Cookies', type: 'Persistent Cookies', purpose: 'These Cookies are used to track information about traffic to the Website and how users use the Website.' },
                  { name: 'Targeting and Advertising Cookies', type: 'Persistent Cookies', purpose: 'These Cookies track your browsing habits to enable Us to show advertising which is more likely to be of interest to You.' },
                ].map(({ name, type, purpose }) => (
                  <Bullet key={name}>
                    <p><strong>{name}</strong> — Type: {type}. {purpose}</p>
                  </Bullet>
                ))}
              </BulletList>

              <Section title="Use of Your Personal Data" level={3} />
              <P>The Company may use Personal Data for the following purposes:</P>
              <BulletList>
                {[
                  { bold: 'To provide and maintain our Service', rest: ', including to monitor the usage of our Service.' },
                  { bold: 'To manage Your Account:', rest: ' to manage Your registration as a user of the Service.' },
                  { bold: 'For the performance of a contract:', rest: ' the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased.' },
                  { bold: 'To contact You:', rest: ' To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication regarding updates or informative communications.' },
                  { bold: 'To provide You', rest: ' with news, special offers and general information about other goods, services and events which we offer.' },
                  { bold: 'To manage Your requests:', rest: ' To attend and manage Your requests to Us.' },
                  { bold: 'For business transfers:', rest: ' We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets.' },
                  { bold: 'For other purposes', rest: ': We may use Your information for other purposes, such as data analysis, identifying usage trends, and determining the effectiveness of our promotional campaigns.' },
                ].map(({ bold, rest }) => (
                  <Bullet key={bold}><p><strong>{bold}</strong>{rest}</p></Bullet>
                ))}
              </BulletList>
              <P>We may share Your personal information in the following situations:</P>
              <BulletList>
                {[
                  { bold: 'With Service Providers:', rest: ' We may share Your personal information with Service Providers to monitor and analyze the use of our Service.' },
                  { bold: 'For business transfers:', rest: ' We may share or transfer Your personal information in connection with any merger, sale of Company assets, financing, or acquisition.' },
                  { bold: 'With Affiliates:', rest: ' We may share Your information with Our affiliates.' },
                  { bold: 'With business partners:', rest: ' We may share Your information with Our business partners.' },
                  { bold: 'With other users:', rest: ' when You share personal information or otherwise interact in the public areas with other users.' },
                  { bold: 'With Your consent', rest: ': We may disclose Your personal information for any other purpose with Your consent.' },
                ].map(({ bold, rest }) => (
                  <Bullet key={bold}><p><strong>{bold}</strong>{rest}</p></Bullet>
                ))}
              </BulletList>

              <Section title="Retention of Your Personal Data" level={3} />
              <P>
                The Company will retain Your Personal Data only for as long as is necessary for the purposes
                set out in this Privacy Policy. We will retain and use Your Personal Data to the extent
                necessary to comply with our legal obligations, resolve disputes, and enforce our legal
                agreements and policies.
              </P>
              <P>
                The Company will also retain Usage Data for internal analysis purposes. Usage Data is
                generally retained for a shorter period of time, except when this data is used to strengthen
                the security or to improve the functionality of Our Service.
              </P>

              <Section title="Transfer of Your Personal Data" level={3} />
              <P>
                Your information, including Personal Data, is processed at the Company's operating offices
                and in any other places where the parties involved in the processing are located. This
                information may be transferred to — and maintained on — computers located outside of Your
                state, province, country or other governmental jurisdiction where the data protection laws
                may differ than those from Your jurisdiction.
              </P>
              <P>
                Your consent to this Privacy Policy followed by Your submission of such information
                represents Your agreement to that transfer. The Company will take all steps reasonably
                necessary to ensure that Your data is treated securely and in accordance with this Privacy
                Policy.
              </P>

              <Section title="Delete Your Personal Data" level={3} />
              <P>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</P>
              <P>
                You may update, amend, or delete Your information at any time by signing in to Your Account
                and visiting the account settings section. You may also contact Us to request access to,
                correct, or delete any personal information that You have provided to Us.
              </P>
              <P>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</P>

              <Section title="Disclosure of Your Personal Data" level={3} />
              <Section title="Business Transactions" level={4} />
              <P>
                If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be
                transferred. We will provide notice before Your Personal Data is transferred and becomes
                subject to a different Privacy Policy.
              </P>
              <Section title="Law enforcement" level={4} />
              <P>
                Under certain circumstances, the Company may be required to disclose Your Personal Data if
                required to do so by law or in response to valid requests by public authorities.
              </P>
              <Section title="Other legal requirements" level={4} />
              <P>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</P>
              <BulletList>
                {[
                  'Comply with a legal obligation',
                  'Protect and defend the rights or property of the Company',
                  'Prevent or investigate possible wrongdoing in connection with the Service',
                  'Protect the personal safety of Users of the Service or the public',
                  'Protect against legal liability',
                ].map((item) => <Bullet key={item}>{item}</Bullet>)}
              </BulletList>

              <Section title="Security of Your Personal Data" level={3} />
              <P>
                The security of Your Personal Data is important to Us, but remember that no method of
                transmission over the Internet, or method of electronic storage is 100% secure. While We
                strive to use commercially acceptable means to protect Your Personal Data, We cannot
                guarantee its absolute security.
              </P>

              <Section title="Detailed Information on the Processing of Your Personal Data" />
              <P>The Service Providers We use may have access to Your Personal Data. These third-party vendors collect, store, use, process and transfer information about Your activity on Our Service in accordance with their Privacy Policies.</P>

              <Section title="Analytics" level={3} />
              <P>We may use third-party Service providers to monitor and analyze the use of our Service.</P>
              <BulletList>
                <Bullet>
                  <p><strong>Google Analytics</strong> — A web analytics service offered by Google that tracks and reports website traffic. For more information:{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">https://policies.google.com/privacy</a>
                  </p>
                </Bullet>
                <Bullet>
                  <p><strong>Firebase</strong> — An analytics service provided by Google Inc. For more information:{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-teal-400 hover:underline">https://policies.google.com/privacy</a>
                  </p>
                </Bullet>
              </BulletList>

              <Section title="Your Rights under the GDPR" level={3} />
              <P>The Company undertakes to respect the confidentiality of Your Personal Data and to guarantee You can exercise Your rights. You have the right under this Privacy Policy, and by law if You are within the EU, to:</P>
              <BulletList>
                {[
                  { bold: 'Request access to Your Personal Data.', rest: ' The right to access, update or delete the information We have on You.' },
                  { bold: 'Request correction of the Personal Data that We hold about You.', rest: ' You have the right to have any incomplete or inaccurate information We hold about You corrected.' },
                  { bold: 'Object to processing of Your Personal Data.', rest: ' This right exists where We are relying on a legitimate interest as the legal basis for Our processing.' },
                  { bold: 'Request erasure of Your Personal Data.', rest: ' You have the right to ask Us to delete or remove Personal Data when there is no good reason for Us to continue processing it.' },
                  { bold: 'Request the transfer of Your Personal Data.', rest: ' We will provide to You, or to a third-party You have chosen, Your Personal Data in a structured, commonly used, machine-readable format.' },
                  { bold: 'Withdraw Your consent.', rest: ' You have the right to withdraw Your consent on using your Personal Data.' },
                ].map(({ bold, rest }) => (
                  <Bullet key={bold}><p><strong>{bold}</strong>{rest}</p></Bullet>
                ))}
              </BulletList>

              <Section title="Exercising of Your GDPR Data Protection Rights" level={3} />
              <P>You may exercise Your rights of access, rectification, cancellation and opposition by contacting Us. Please note that we may ask You to verify Your identity before responding to such requests.</P>
              <P>You have the right to complain to a Data Protection Authority about Our collection and use of Your Personal Data.</P>

              <Section title="CCPA/CPRA Privacy Notice" />
              <P>This privacy notice section for California residents supplements the information contained in Our Privacy Policy and it applies solely to all visitors, users, and others who reside in the State of California.</P>

              <Section title="Categories of Personal Information Collected" level={3} />
              <P>We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular Consumer or Device.</P>
              <BulletList>
                {[
                  { cat: 'Category A: Identifiers.', ex: 'A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name.' },
                  { cat: 'Category B: Personal information categories listed in the California Customer Records statute.', ex: 'A name, signature, Social Security number, physical characteristics or description, address, telephone number.' },
                  { cat: 'Category F: Internet or other similar network activity.', ex: 'Interaction with our Service or advertisement.' },
                  { cat: 'Category L: Sensitive personal information.', ex: 'Account login and password information, geolocation data.' },
                ].map(({ cat, ex }) => (
                  <Bullet key={cat}><p><strong>{cat}</strong> Examples: {ex} Collected: Yes.</p></Bullet>
                ))}
              </BulletList>

              <Section title="Your Rights under the CCPA/CPRA" level={3} />
              <P>The CCPA/CPRA provides California residents with specific rights regarding their personal information. If You are a resident of California, You have the following rights:</P>
              <BulletList>
                {[
                  { bold: 'The right to notice.', rest: ' You have the right to be notified which categories of Personal Data are being collected.' },
                  { bold: 'The right to know/access.', rest: ' You have the right to request that We disclose information to You about Our collection, use, sale, disclosure for business purposes and share of personal information.' },
                  { bold: 'The right to say no to the sale or sharing of Personal Data (opt-out).', rest: ' You have the right to direct Us to not sell Your personal information.' },
                  { bold: 'The right to correct Personal Data.', rest: ' You have the right to correct or rectify any inaccurate personal information about You that We collected.' },
                  { bold: 'The right to delete Personal Data.', rest: ' You have the right to request the deletion of Your Personal Data under certain circumstances.' },
                  { bold: 'The right not to be discriminated against.', rest: ' You have the right not to be discriminated against for exercising any of Your consumer\'s rights.' },
                ].map(({ bold, rest }) => (
                  <Bullet key={bold}><p><strong>{bold}</strong>{rest}</p></Bullet>
                ))}
              </BulletList>

              <Section title='"Do Not Track" Policy as Required by California Online Privacy Protection Act (CalOPPA)' />
              <P>Our Service does not respond to Do Not Track signals. However, some third party websites do keep track of Your browsing activities. If You are visiting such websites, You can set Your preferences in Your web browser to inform websites that You do not want to be tracked.</P>

              <Section title="Your California Privacy Rights (California's Shine the Light law)" />
              <P>Under California Civil Code Section 1798 (California's Shine the Light law), California residents with an established business relationship with us can request information once a year about sharing their Personal Data with third parties for the third parties' direct marketing purposes.</P>

              <Section title="California Privacy Rights for Minor Users" />
              <P>California Business and Professions Code Section 22581 allows California residents under the age of 18 who are registered users of online sites, services or applications to request and obtain removal of content or information they have publicly posted.</P>

              <Section title="Children's Privacy" />
              <P>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.</P>
              <P>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</P>

              <Section title="Links to Other Websites" />
              <P>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</P>
              <P>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</P>

              <Section title="Changes to this Privacy Policy" />
              <P>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</P>
              <P>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</P>
              <P>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</P>

              <Section title="Contact Us" level={3} />
              <P>If you have any questions about this Privacy Policy, You can contact us:</P>
              <div className="bg-dark-card border border-slate-700 p-4 rounded-lg text-slate-400 text-sm space-y-1">
                <p className="font-semibold text-white">Arjava Technologies</p>
                <p>2135 204th PL NE, Sammamish, WA 98074</p>
                <p>
                  Phone:{' '}
                  <a href="tel:+14259999719" className="text-teal-400 hover:underline">+1 (425) 999-9719</a>
                </p>
                <p>
                  Email:{' '}
                  <a href="mailto:arjavatech@gmail.com" className="text-teal-400 hover:underline">arjavatech@gmail.com</a>
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
