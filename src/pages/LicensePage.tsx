import { LICENSES } from '../data/licenses'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ResourceCards from '../components/ResourceCards'
import VideoSection from '../components/VideoSection'
import Applications from '../components/Applications'
import Footer from '../components/Footer'

interface Props {
  licenseId: string
}

export default function LicensePage({ licenseId }: Props) {
  const license = LICENSES[licenseId]

  if (!license) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2>Licença não encontrada.</h2>
      </div>
    )
  }

  return (
    <>
      <Header />
      <Hero licenseId={licenseId} />
      <ResourceCards license={license} />
      <VideoSection />
      <Applications />
      <Footer />
    </>
  )
}
