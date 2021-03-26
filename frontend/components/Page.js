import PropTypes from 'prop-types'

export default function Page({children}) {
    return <div>
                <h2>I am the page component</h2>
                {children}
            </div>
}

// Acceptable use of any, children could be a variety of types and we don't really care.
// Why set PropTypes at all if you set it to any? Legibility?

Page.propTypes = {
    children: PropTypes.any,
}