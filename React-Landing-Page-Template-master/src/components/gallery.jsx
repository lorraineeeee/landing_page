import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Overview of database (Total Patient Count = 15)</h2>
          <p>
          The CHD Atlas database separates and organizes coded patient data using a unique patient ID in the format “CHD12345”. Each patient has basic clinical information (Cohort, Sex, Ethnicity, Race), and then specific clinical parameters, measures and clinical files organized by study type (i.e. MRI, Echo, ECG, etc.) and corresponding age. Procedures and other data are also organized by age. MR imaging studies are further organized by a study identifier with an added instance number (e.g. CHD1234501), and these studies can include DICOM images and computational models for these studies. The patient data are organized with the basic structure on the right.
          </p>
        </div>
        <div className='row'>
          
        </div>
      </div>
    </div>
  )
}
