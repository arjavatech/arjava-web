import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: 'white',
      padding: '60px 0 30px',
      margin: 0
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px'
              }}>
                <span style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>A</span>
              </div>
              <span style={{
                fontSize: '24px',
                fontWeight: 'bold'
              }}>Arjava</span>
            </div>
            <p style={{
              color: '#cbd5e1',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>Building innovative software solutions that transform businesses and drive digital success.</p>
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.target.style.background = '#3b82f6'}
              onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.target.style.background = '#e1306c'}
              onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.target.style.background = '#1da1f2'}
              onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}>
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.target.style.background = '#0077b5'}
              onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}>
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'white'
            }}>Quick Links</h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <a href="#" style={{
                color: '#cbd5e1',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = '#3b82f6'}
              onMouseOut={(e) => e.target.style.color = '#cbd5e1'}>Home</a>
              <a href="#about" style={{
                color: '#cbd5e1',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = '#3b82f6'}
              onMouseOut={(e) => e.target.style.color = '#cbd5e1'}>About Us</a>
              <a href="#services" style={{
                color: '#cbd5e1',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = '#3b82f6'}
              onMouseOut={(e) => e.target.style.color = '#cbd5e1'}>Services</a>
              <a href="#projects" style={{
                color: '#cbd5e1',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = '#3b82f6'}
              onMouseOut={(e) => e.target.style.color = '#cbd5e1'}>Projects</a>
              <a href="#contact" style={{
                color: '#cbd5e1',
                textDecoration: 'none',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = '#3b82f6'}
              onMouseOut={(e) => e.target.style.color = '#cbd5e1'}>Contact</a>
            </div>
          </div>
          
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'white'
            }}>Contact Info</h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px'
              }}>
                <i className="bi bi-geo-alt" style={{
                  color: '#3b82f6',
                  marginTop: '2px'
                }}></i>
                <div style={{
                  color: '#cbd5e1',
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}>
                  19, Ganesh Nagar Main Road,<br />
                  Selaiyur, Chennai - 600073
                </div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <i className="bi bi-envelope" style={{
                  color: '#3b82f6'
                }}></i>
                <a href="mailto:arjavatech@gmail.com" style={{
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  fontSize: '14px'
                }}>arjavatech@gmail.com</a>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <i className="bi bi-telephone" style={{
                  color: '#3b82f6'
                }}></i>
                <span style={{
                  color: '#cbd5e1',
                  fontSize: '14px'
                }}>044-35675035</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'white'
            }}>Newsletter</h3>
            <p style={{
              color: '#cbd5e1',
              fontSize: '14px',
              marginBottom: '16px'
            }}>Subscribe to get updates on our latest projects and services.</p>
            <div style={{
              display: 'flex',
              gap: '8px'
            }}>
              <input type="email" placeholder="Enter your email" style={{
                flex: '1',
                padding: '12px',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                fontSize: '14px'
              }} />
              <button style={{
                padding: '12px 20px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>Subscribe</button>
            </div>
          </div>
          
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '20px',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#94a3b8',
            fontSize: '14px',
            margin: '0'
          }}>&copy; 2024 Arjava Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;