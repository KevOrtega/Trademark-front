// dev's modules
import React from 'react'
import classNames from 'classnames'

// styles sheets
import './main.css'

// Main components
import Container from '../Container'
import Images, {ImageParallax} from '../../atoms/Images'
import Ilustration from '../../assets/ilustration.png'
import Button from '../Button'
import Link from '../Link'
import SitesLogos from '../../atoms/SitesLogos'
import Heading from '../../atoms/Heading'
import Text from '../../atoms/Text'
import { FormLogIn, FormSignIn } from "../Form"
import Carousel from "../Carousel"
import { InputFiles } from '../../atoms/Input'
import Label from '../../atoms/Label'
import Textarea from '../../atoms/Textarea'

export const HomeMain = ({account, setAccount}) => account === null ? <main className="main">
    <Images type="ilustration" src={Ilustration} />
    <Container styles="buttons-redirect">
        <Link to="/pages">
            <Button styles='button-bg'>
                <Container styles="svg-logo-clicking"></Container>
                <SitesLogos type="pages" />
                <Heading>Páginas</Heading>
                <Text>Ve las páginas de tus empresas favoritas.</Text>
            </Button>
        </Link>
        <Link to="/form">
            <Button styles='button-bg'>
                <Container styles="svg-logo-clicking"></Container>
                <SitesLogos type="sign in" />
                <Heading>Iniciar sesión</Heading>
                <Text>Inicia sesión para crear la página que quieras.</Text>
            </Button>
        </Link>
    </Container>
</main> : <main className="main">
    <Images type="ilustration" src={Ilustration} />
    <Container styles="buttons-redirect">
        <Link to="/pages">
            <Button styles='button-bg'>
                <Container styles="svg-logo-clicking"></Container>
                <SitesLogos type="pages" />
                <Heading>Páginas</Heading>
                <Text>Ve las páginas de tus empresas favoritas.</Text>
            </Button>
        </Link>
        <Link to="/">
            <Button styles='button-bg' onClick={() => setAccount(null)}>
                <Container styles="svg-logo-clicking"></Container>
                <SitesLogos type="log out" />
                <Heading>Salir de la sesión</Heading>
                <Text>Te extrañaremos :)</Text>
            </Button>
        </Link>
    </Container>
</main>

export const PagesMain = ({companies}) => <main className="main">
    <Container styles="pages-content">
        {companies.map((company, index) => <Link to={'/pages/'+company.title} key={`page-${index}`}>
            <Button styles="pages-content__page">
                <Container styles="page-image">
                    <Images src={company.image} />
                </Container>
                <Container styles="page-data">
                    <Heading>{company.title}</Heading>
                    <Text>{company.work}</Text>
                    <Text>{company.schedule}</Text>
                    {company.contact.map((contact, index) => <Text key={`contact-${index}`}>{contact}</Text>)}
                </Container>
            </Button>
        </Link>)}
    </Container>
</main>

export const FormMain = ({isUserLogging, setIsUserLogging, setAccount}) => <main className="main">
    <Container styles="main-form">
        <Container styles="form-options">
            <Button styles={classNames('form-options__button', isUserLogging ? 'form-options__button--active' : '')}
            onClick={() => setIsUserLogging(true)}>iniciar sesión</Button>
            <Button styles={classNames('form-options__button', !isUserLogging ? 'form-options__button--active' : '')}
            onClick={() => setIsUserLogging(false)}>registrarse</Button>
        </Container>
        <Container styles="form-container">
            <FormLogIn isFormOn={isUserLogging} setAccount={setAccount} />
            <FormSignIn isFormOn={!isUserLogging} setAccount={setAccount} />
        </Container>
    </Container>
</main>

export const PageMain = ({company, page_scrollY}) => <main className="main">
    <Container styles="page-site__image-container">
        <Heading styles="page-site__image-title">{company.title}</Heading>
        <ImageParallax page_scrollY={page_scrollY} src={company.image} type="page-background" />
    </Container>
    <Container styles="page-site__section-black">
        <Heading styles="page-site__title-section">{company.about.title}</Heading>
        <Text styles="page-site__text-white" type="white">
            {company.about.content}
        </Text>
    </Container>
    <Container styles="page-site__section-white">
        <Heading styles="page-site__title-section">horario</Heading>
        <Text styles="page-site__text-black">
            {company.schedule}
        </Text>
    </Container>
    <Container styles="page-site__gallery-container">
        <Heading styles="page-site__title-section">{company.experience.title}</Heading>
        <Container styles="page-site__gallery">
            <Carousel images={company.experience.images} />
        </Container>
    </Container>
    <Container styles="page-site__section-white">
        <Heading styles="page-site__title-section">contacto</Heading>
        {company.contact.map((contact, i) => <Text styles="page-site__text-black" key={'contact'+i}>{contact}</Text>)}
    </Container>
</main>

export const UserMain = ({account, avatar, setAccount, onChangeUserLogo}) => <main className="main">
    <Container styles="main__user">
        {avatar ? 
        <Button styles='button-bg user-logo'>
            <Images src={avatar} />
        </Button> :
        <Button styles='button-bg choose-user-logo'>
            <Label of="user-logo-files">elije una foto de perfil</Label>
            <InputFiles name="user-logo-files" onChange={onChangeUserLogo} />
        </Button>}
        <br/>
        {account && account.personal_text ? 
        <Text styles="user__personal-text">{account.personal_text}</Text> :
        <Textarea autoComplete="off" placeholder="pon tu información personal para que conozcan de ti :)"></Textarea>}
    </Container>
    <Container styles="buttons-redirect">
        <Link to="/pages">
            <Button styles='button-bg'>
                <Container styles="svg-logo-clicking"></Container>
                <SitesLogos type="pages" />
                <Heading>Páginas</Heading>
                <Text>Ve las páginas de tus empresas favoritas.</Text>
            </Button>
        </Link>
        <Link to="/">
            <Button styles='button-bg' onClick={() => setAccount(null)}>
                <Container styles="svg-logo-clicking"></Container>
                <SitesLogos type="log out" />
                <Heading>Salir de la sesión</Heading>
                <Text>Te extrañaremos :)</Text>
            </Button>
        </Link>
    </Container>
</main>