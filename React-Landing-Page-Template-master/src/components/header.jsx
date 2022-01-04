export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
                <a
                  href='mailto:jomens@ucsd.edu?subject=CAPCHD%20Account%20Request'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Sign up
                </a>{' '}
                <a
                  href='https://capchd-dev.com/'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Log in
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
