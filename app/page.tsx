import Image from 'next/image'

const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#quem-somos' },
  { label: 'Contato', href: '#contato' },
] as const

function WhatsAppButton({
  label,
  variant = 'primary',
}: {
  label: string
  variant?: 'primary' | 'secondary'
}) {
  return (
    <a
      className={`button ${variant === 'primary' ? 'buttonPrimary' : 'buttonSecondary'}`}
      href="https://wa.me/5548996631148"
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  )
}

function AnchorButton({
  label,
  href,
  variant = 'secondary',
}: {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}) {
  return (
    <a
      className={`button ${variant === 'primary' ? 'buttonPrimary' : 'buttonSecondary'}`}
      href={href}
    >
      {label}
    </a>
  )
}

const services = [
  {
    title: 'Câmeras',
    description: 'Monitoramento completo com imagens em alta definição, acesso remoto e mais segurança.',
  },
  {
    title: 'Fechaduras eletrônicas',
    description: 'Mais praticidade e proteção com senha, cartão, biometria e controle remoto.',
  },
  {
    title: 'Controle de acesso',
    description: 'Soluções para controlar a entrada de pessoas com mais segurança e organização.',
  },
  {
    title: 'Instalações elétricas',
    description: 'Projetos e instalações com segurança, organização e acabamento profissional.',
  },
  {
    title: 'Iluminação',
    description: 'Projetos de iluminação que valorizam o ambiente e trazem conforto e eficiência.',
  },
  {
    title: 'Automação',
    description: 'Controle iluminação, portões e dispositivos com praticidade na palma da mão.',
  },
] as const

const highlights = [
  { value: '10+', label: 'anos de experiência' },
  { value: '200+', label: 'clientes atendidos' },
] as const

const process = [
  {
    step: '01',
    title: 'Entendimento do cenário',
    description: 'Analisamos o imóvel, a rotina e o nível de segurança necessário.',
  },
  {
    step: '02',
    title: 'Proposta objetiva',
    description: 'Indicamos a solução certa com orçamento claro e equipamentos adequados.',
  },
  {
    step: '03',
    title: 'Instalação limpa',
    description: 'Executamos com organização, acabamento profissional e suporte após a entrega.',
  },
] as const

export default function HomePage() {
  return (
    <main className="pageShell">
      <header className="siteHeader">
        <div className="container headerInner">
          <a className="brand" href="#inicio" aria-label="Blum Soluções">
            <Image src="/blum-logo.png" alt="Blum Soluções" width={210} height={64} priority />
          </a>

          <nav className="siteNav" aria-label="Seções principais">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="headerActions">
            <AnchorButton label="Ver serviços" href="#servicos" />
            <WhatsAppButton label="WhatsApp" />
          </div>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="heroGlow heroGlowLeft" />
        <div className="heroGlow heroGlowRight" />

        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">
              <span className="eyebrowIcon" />
              Segurança • Tecnologia • Confiança
            </div>

            <h1>Soluções inteligentes para mais segurança, conforto e praticidade.</h1>

            <p className="heroLead">
              Instalações elétricas, segurança eletrônica, automação, controle de acesso e
              iluminação. Tudo o que você precisa em um só lugar.
            </p>

            <p className="heroText">
              Projetos personalizados para residências, empresas e condomínios com entrega
              organizada, suporte técnico e equipamentos confiáveis.
            </p>

            <div className="heroActions">
              <WhatsAppButton label="Solicitar orçamento" />
              <AnchorButton label="Conhecer serviços" href="#servicos" variant="secondary" />
            </div>

            <div className="heroTrust" aria-label="Pontos fortes">
              {highlights.map((item) => (
                <div className="trustChip" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="heroVisual" aria-hidden="true">
            <Image
              src="/blum-logo-mark.png"
              alt=""
              width={1500}
              height={1500}
              className="heroLogoArt"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section sectionDivider" id="servicos">
        <div className="container">
          <div className="sectionHead">
            <p className="sectionKicker">Serviços</p>
            <h2>Soluções completas para seu imóvel.</h2>
          </div>

          <div className="serviceGrid">
            {services.map((service, index) => (
              <article key={service.title} className={`serviceTile serviceTile${(index % 6) + 1}`}>
                <div className="serviceTileMedia" aria-hidden="true">
                  <span>Adicionar imagens do serviço aqui</span>
                </div>
                <div className="serviceTileContent">
                  <span className="serviceTileIndex">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="quem-somos">
        <div className="container splitLayout">
          <div>
            <div className="sectionHead left">
              <p className="sectionKicker">Quem somos</p>
              <h2>Mais do que instalar equipamentos, entregamos tranquilidade.</h2>
            </div>
            <ul className="benefitsList">
              <li>Mais de 10 anos de experiência</li>
              <li>Equipe especializada</li>
              <li>Atendimento para residências, empresas e condomínios</li>
              <li>Instalação limpa e organizada</li>
            </ul>
          </div>

          <div className="imageHighlight" aria-label="Imagem institucional da Blum Soluções">
            <div className="imageHighlightFrame">
              <Image
                src="https://jfltbluknvirjoizhavf.supabase.co/storage/v1/object/public/proposals/blum.png"
                alt="Blum Soluções"
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 48vw"
                className="imageHighlightMedia"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionDivider" id="projetos">
        <div className="container">
          <div className="sectionHead narrow">
            <p className="sectionKicker">Como trabalhamos</p>
            <h2>Um processo direto, pensado para evitar retrabalho.</h2>
          </div>

          <div className="processGrid">
            {process.map((item) => (
              <article className="processCard" key={item.step}>
                <span className="processStep">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contato">
        <div className="container splitLayout">
          <div>
            <div className="sectionHead left">
              <p className="sectionKicker">Contato</p>
              <h2>Fale com um especialista e receba um orçamento.</h2>
            </div>
            <div className="contactInline">
              <p>
                WhatsApp: <a href="tel:+5548996631148">(48) 99663-1148</a>
              </p>
              <p>
                Email: <a href="mailto:fernaandoblum@gmail.com">fernaandoblum@gmail.com</a>
              </p>
            </div>
            <div className="sectionActions">
              <AnchorButton label="Ir para o topo" href="#inicio" variant="secondary" />
            </div>
          </div>

          <div className="textBlock">
            <p className="sectionKicker">FAQ</p>
            <div className="faqList">
              <details className="faqItem">
                <summary>Vocês atendem apenas residências?</summary>
                <p>Não. Também atendemos empresas, condomínios e estabelecimentos comerciais.</p>
              </details>
              <details className="faqItem">
                <summary>Vocês fazem orçamento?</summary>
                <p>Sim. Entre em contato e analisaremos seu projeto.</p>
              </details>
              <details className="faqItem">
                <summary>Vocês trabalham com equipamentos próprios?</summary>
                <p>Sim. Trabalhamos apenas com equipamentos de qualidade e indicados para cada necessidade.</p>
              </details>
              <details className="faqItem">
                <summary>Atendem emergências?</summary>
                <p>Consulte nossa equipe pelo WhatsApp para verificar disponibilidade.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div>
            <strong>Blum Soluções</strong>
            <p>
              Soluções em Segurança Eletrônica, Instalações Elétricas, Automação, Controle
              de Acesso e Iluminação.
            </p>
          </div>
          <div className="footerMeta">
            <p>WhatsApp: (48) 99663-1148</p>
            <p>Email: fernaandoblum@gmail.com</p>
          </div>
          <div className="footerCopy">Todos os direitos reservados.</div>
        </div>
      </footer>
    </main>
  )
}
