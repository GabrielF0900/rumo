import { Download, FileText } from 'lucide-react'

const resumePath = '/curriculo/Modelo_Curriculo_Universal_ATS_Rumo.docx'

export function GuideResumeDownload() {
  return (
    <aside className="guide-resume-download" aria-label="Modelo de currículo">
      <span className="guide-resume-download-icon" aria-hidden="true">
        <FileText size={25} strokeWidth={1.8} />
      </span>

      <div className="guide-resume-download-copy">
        <strong>Comece com uma estrutura pronta</strong>
        <p>
          Baixe o modelo editável da Rumo e adapte cada seção às suas experiências.
        </p>
      </div>

      <a className="guide-resume-download-button" href={resumePath} download>
        <Download size={18} aria-hidden="true" />
        Baixar Modelo de Currículo
      </a>
    </aside>
  )
}
