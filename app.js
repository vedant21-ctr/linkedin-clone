// Import React Router (it's already included in index.html)
const { BrowserRouter, Route, Switch, Link, useHistory, HashRouter } = ReactRouterDOM;

// Add this at the top of the file
(function() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
        history.replaceState(null, null, redirect);
    }
})();

// Header Component
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Link to="/">
                    <img src="https://www.linkedin.com/in/favicon.ico" alt="LinkedIn Logo" />
                </Link>
                <div className="header__search">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <Link to="/" className={window.location.pathname === "/" ? "headerOption active" : "headerOption"}>
                    <i className="fas fa-home headerOption__icon"></i>
                    <h3 className="headerOption__title">Home</h3>
                </Link>
                <Link to="/mynetwork" className={window.location.pathname === "/mynetwork" ? "headerOption active" : "headerOption"}>
                    <i className="fas fa-user-friends headerOption__icon"></i>
                    <h3 className="headerOption__title">My Network</h3>
                </Link>
                <Link to="/jobs" className={window.location.pathname === "/jobs" ? "headerOption active" : "headerOption"}>
                    <i className="fas fa-briefcase headerOption__icon"></i>
                    <h3 className="headerOption__title">Jobs</h3>
                </Link>
                <div className="headerOption">
                    <i className="fas fa-comment-dots headerOption__icon"></i>
                    <h3 className="headerOption__title">Messaging</h3>
                </div>
                <div className="headerOption">
                    <i className="fas fa-bell headerOption__icon"></i>
                    <h3 className="headerOption__title">Notifications</h3>
                </div>
                <div className="headerOption">
                    <img className="headerOption__avatar" src="https://media.licdn.com/dms/image/D4D03AQFXxCxdHmFN6A/profile-displayphoto-shrink_100_100/0/1709494949443?e=1715212800&v=beta&t=8RRQQQuhQJ-dH7mw9LEQyq9MBEu8h7UeKDHvKMSEGXE" alt="Me" />
                    <h3 className="headerOption__title">Me</h3>
                </div>
                <div className="headerOption">
                    <i className="fas fa-th headerOption__icon"></i>
                    <h3 className="headerOption__title">For Business</h3>
                </div>
                <div className="headerOption premium">
                    <span className="premium-text">Try Premium for ₹0</span>
                </div>
            </div>
        </div>
    );
}

// Profile Section Component
function ProfileSection() {
    return (
        <div className="profile-section">
            <div className="profile-background">
                <img src="https://media.licdn.com/dms/image/D4D16AQGTVJv5s1gUuQ/profile-displaybackgroundimage-shrink_350_1400/0/1709494949435?e=1715212800&v=beta&t=8RRQQQuhQJ-dH7mw9LEQyq9MBEu8h7UeKDHvKMSEGXE" alt="Background" className="profile-cover" />
            </div>
            <div className="profile-info">
                <img src="https://media.licdn.com/dms/image/D4D03AQFXxCxdHmFN6A/profile-displayphoto-shrink_100_100/0/1709494949443?e=1715212800&v=beta&t=8RRQQQuhQJ-dH7mw9LEQyq9MBEu8h7UeKDHvKMSEGXE" alt="Profile" className="profile-avatar" />
                <h2>Vedant Satbhai</h2>
                <p>Student at Newton School</p>
                <p className="profile-location">Delhi</p>
            </div>
            <div className="profile-stats">
                <div className="stat-item">
                    <span className="stat-number">32</span>
                    <span className="stat-label">Profile viewers</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">25</span>
                    <span className="stat-label">Post impressions</span>
                </div>
            </div>
            <div className="profile-premium">
                <p>Unlock 4x more profile visits</p>
                <button className="premium-button">Try Premium for ₹0</button>
            </div>
            <div className="profile-items">
                <div className="profile-item">
                    <i className="fas fa-bookmark"></i>
                    <span>Saved items</span>
                </div>
                <div className="profile-item">
                    <i className="fas fa-users"></i>
                    <span>Groups</span>
                </div>
                <div className="profile-item">
                    <i className="fas fa-newspaper"></i>
                    <span>Newsletters</span>
                </div>
                <div className="profile-item">
                    <i className="fas fa-calendar"></i>
                    <span>Events</span>
                </div>
            </div>
        </div>
    );
}

// Post Component
function Post({ author, authorTitle, timestamp, content, image, likes, comments, isShared, sharedFrom }) {
    return (
        <div className="post">
            <div className="post__header">
                {isShared && (
                    <div className="post__shared">
                        <i className="fas fa-retweet"></i>
                        <span>{sharedFrom} shared this</span>
                    </div>
                )}
                <div className="post__author">
                    <img src={author.image} alt={author.name} className="post__avatar" />
                    <div className="post__info">
                        <h3>{author.name}</h3>
                        <p>{authorTitle}</p>
                        <span className="post__timestamp">{timestamp} • <i className="fas fa-globe-americas"></i></span>
                    </div>
                    <button className="post__more">
                        <i className="fas fa-ellipsis-h"></i>
                    </button>
                </div>
            </div>
            <div className="post__content">
                <p>{content}</p>
                {image && (
                    <div className="post__image">
                        <img src={image} alt="Post content" />
                    </div>
                )}
            </div>
            <div className="post__stats">
                <div className="post__reactions">
                    <img src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="like" />
                    <img src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8" alt="celebrate" />
                    <span>{likes}</span>
                </div>
                <div className="post__engagement">
                    <span>{comments} comments</span>
                </div>
            </div>
            <div className="post__buttons">
                <button className="post__button">
                    <i className="far fa-thumbs-up"></i>
                    Like
                </button>
                <button className="post__button">
                    <i className="far fa-comment"></i>
                    Comment
                </button>
                <button className="post__button">
                    <i className="fas fa-share"></i>
                    Share
                </button>
                <button className="post__button">
                    <i className="far fa-paper-plane"></i>
                    Send
                </button>
            </div>
        </div>
    );
}

// Feed Component
function Feed() {
    const posts = [
        {
            author: {
                name: "Google Developers",
                image: "https://media.licdn.com/dms/image/C4E0BAQHvLVq6WkuHGw/company-logo_100_100/0/1631352526131?e=1709769600&v=beta&t=VBPJq3u5mxhZgZDf12MQpCWRVTWWPpiUs9JQJQFbj8s"
            },
            authorTitle: "17,934,561 followers",
            timestamp: "2d",
            content: "🎉 Exciting news! We're thrilled to announce the release of Flutter 3.0, bringing groundbreaking improvements to cross-platform development. Check out the new features that will revolutionize your app development process! #Flutter #Development #Technology",
            image: "https://media.licdn.com/dms/image/D5622AQF_hPxn1zs7Yw/feedshare-shrink_800/0/1709494949435?e=1712188800&v=beta&t=8RRQQQuhQJ-dH7mw9LEQyq9MBEu8h7UeKDHvKMSEGXE",
            likes: "2,456",
            comments: "184"
        },
        {
            author: {
                name: "Microsoft",
                image: "https://media.licdn.com/dms/image/C560BAQHdAaarsO-eyA/company-logo_100_100/0/1679925159166?e=1709769600&v=beta&t=1KXGJB8Gx4nJ_Ql8aEEYxCwEZWwxHJrZHCN7M-6UOZs"
            },
            authorTitle: "Company • Computer Software",
            timestamp: "1d",
            content: "We're excited to share that GitHub Copilot is now helping developers write code faster and with fewer bugs! 🚀\n\nSee how AI-powered pair programming is transforming the development experience:",
            likes: "3,872",
            comments: "245",
            isShared: true,
            sharedFrom: "Satya Nadella"
        },
        {
            author: {
                name: "Newton School",
                image: "https://media.licdn.com/dms/image/C4D0BAQHR4kplerw3YQ/company-logo_100_100/0/1631350520006?e=1709769600&v=beta&t=0KkKFyx0oPBDvmN7PTYs9J3Jx2LRDC0DKXXDHzHFGQc"
            },
            authorTitle: "Educational Institution",
            timestamp: "3h",
            content: "🎓 Proud moment! Our students are making waves in the tech industry. Congratulations to our recent graduates who have secured positions at top tech companies!\n\n💼 Average package: 8.5 LPA\n🏢 Companies: Amazon, Microsoft, Swiggy, and more\n\n#NewtonSchool #Placements #TechCareers",
            image: "https://media.licdn.com/dms/image/D4D22AQGzMBaJBQdc5g/feedshare-shrink_800/0/1709494949443?e=1712188800&v=beta&t=8RRQQQuhQJ-dH7mw9LEQyq9MBEu8h7UeKDHvKMSEGXE",
            likes: "1,234",
            comments: "98"
        },
        {
            author: {
                name: "AWS - Amazon Web Services",
                image: "https://media.licdn.com/dms/image/C560BAQGrV5i4K9YdhQ/company-logo_100_100/0/1678382029586?e=1709769600&v=beta&t=1KXGJB8Gx4nJ_Ql8aEEYxCwEZWwxHJrZHCN7M-6UOZs"
            },
            authorTitle: "Company • Information Technology & Services",
            timestamp: "5h",
            content: "📢 Introducing Amazon EC2 Capacity Blocks for ML! Reserve GPU capacity for your machine learning workloads in advance. Perfect for planning your AI/ML projects.\n\nLearn more about this game-changing feature: aws.amazon.com/ec2",
            likes: "956",
            comments: "67"
        }
    ];

    return (
        <div className="feed">
            <div className="post-box">
                <div className="post-input">
                    <img src="https://media.licdn.com/dms/image/D4D03AQFXxCxdHmFN6A/profile-displayphoto-shrink_100_100/0/1709494949443?e=1715212800&v=beta&t=8RRQQQuhQJ-dH7mw9LEQyq9MBEu8h7UeKDHvKMSEGXE" alt="User" className="post-avatar" />
                    <button className="start-post">Start a post</button>
                </div>
                <div className="post-options">
                    <button className="post-option">
                        <i className="fas fa-image" style={{color: '#70B5F9'}}></i>
                        Media
                    </button>
                    <button className="post-option">
                        <i className="fas fa-calendar" style={{color: '#E7A33E'}}></i>
                        Event
                    </button>
                    <button className="post-option">
                        <i className="fas fa-newspaper" style={{color: '#FC9295'}}></i>
                        Write article
                    </button>
                </div>
            </div>
            <div className="feed-filter">
                <hr className="feed-line" />
                <div className="filter-options">
                    <span>Sort by:</span>
                    <select>
                        <option>Top</option>
                        <option>Recent</option>
                    </select>
                </div>
            </div>
            {posts.map((post, index) => (
                <Post key={index} {...post} />
            ))}
        </div>
    );
}

// News Widget Component
function NewsWidget() {
    return (
        <div className="news-widget">
            <div className="widget-header">
                <h2>Trending Now</h2>
                <i className="fas fa-info-circle"></i>
            </div>
            <div className="widget-content">
                <p className="widget-subtitle">curated by LinkedIn News</p>
                <div className="news-item">
                    <h3>AI jobs boom in India</h3>
                    <p>47m ago • 1,814 readers</p>
                </div>
                <div className="news-item">
                    <h3>Electronics giants to invest big</h3>
                    <p>5h ago • 597 readers</p>
                </div>
                <div className="news-item">
                    <h3>India is a top remittance receiver</h3>
                    <p>4h ago • 414 readers</p>
                </div>
                <div className="news-item">
                    <h3>India Inc's wage bill surges</h3>
                    <p>4h ago • 309 readers</p>
                </div>
                <div className="news-item">
                    <h3>Home funds lift D-Street</h3>
                    <p>5h ago • 252 readers</p>
                </div>
                <button className="show-more">Show more</button>
            </div>
        </div>
    );
}

// Network Page Components
function NetworkSidebar() {
    return (
        <div className="network-sidebar">
            <div className="network-section">
                <h2>Manage my network</h2>
                <div className="network-item">
                    <i className="fas fa-user-friends"></i>
                    <span>Connections</span>
                    <span className="count">1,234</span>
                </div>
                <div className="network-item">
                    <i className="fas fa-address-book"></i>
                    <span>Contacts</span>
                    <span className="count">1,500+</span>
                </div>
                <div className="network-item">
                    <i className="fas fa-user-plus"></i>
                    <span>Following & Followers</span>
                    <span className="count">500</span>
                </div>
                <div className="network-item">
                    <i className="fas fa-users"></i>
                    <span>Groups</span>
                    <span className="count">12</span>
                </div>
                <div className="network-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Events</span>
                    <span className="count">8</span>
                </div>
                <div className="network-item">
                    <i className="fas fa-newspaper"></i>
                    <span>Newsletters</span>
                    <span className="count">15</span>
                </div>
                <div className="network-item">
                    <i className="fas fa-hashtag"></i>
                    <span>Hashtags</span>
                    <span className="count">25</span>
                </div>
            </div>
        </div>
    );
}

function ConnectionCard({ name, title, mutualConnections, image }) {
    return (
        <div className="connection-card">
            <img src={image} alt={name} className="connection-avatar" />
            <div className="connection-info">
                <h3>{name}</h3>
                <p>{title}</p>
                <p className="mutual-connections">
                    <i className="fas fa-user-friends"></i> {mutualConnections} mutual connections
                </p>
            </div>
            <button className="connect-button">
                <i className="fas fa-user-plus"></i> Connect
            </button>
        </div>
    );
}

// Invitation Card Component
function InvitationCard({ name, title, mutualConnections, image, time }) {
    return (
        <div className="invitation-card">
            <div className="invitation-left">
                <img src={image} alt={name} className="invitation-avatar" />
                <div className="invitation-info">
                    <h3>{name}</h3>
                    <p>{title}</p>
                    <p className="mutual-connections">
                        <i className="fas fa-user-friends"></i> {mutualConnections} mutual connections
                    </p>
                    <span className="invitation-time">{time}</span>
                </div>
            </div>
            <div className="invitation-actions">
                <button className="ignore-button">Ignore</button>
                <button className="accept-button">Accept</button>
            </div>
        </div>
    );
}

// Jobs Page Component
function JobsPage() {
    const recentSearches = [
        "Frontend Developer",
        "React Developer",
        "Software Engineer",
        "Full Stack Developer"
    ];

    const savedJobs = [
        {
            title: "Senior React Developer",
            company: "Google",
            location: "Bangalore, India",
            salary: "₹25L - ₹45L/year",
            posted: "2 days ago",
            logo: "https://media.licdn.com/dms/image/C4E0BAQHvLVq6WkuHGw/company-logo_100_100/0/1631352526131?e=1709769600&v=beta&t=VBPJq3u5mxhZgZDf12MQpCWRVTWWPpiUs9JQJQFbj8s"
        },
        {
            title: "Full Stack Developer",
            company: "Microsoft",
            location: "Hyderabad, India",
            salary: "₹20L - ₹35L/year",
            posted: "1 day ago",
            logo: "https://media.licdn.com/dms/image/C560BAQHdAaarsO-eyA/company-logo_100_100/0/1679925159166?e=1709769600&v=beta&t=1KXGJB8Gx4nJ_Ql8aEEYxCwEZWwxHJrZHCN7M-6UOZs"
        }
    ];

    const recommendedJobs = [
        {
            title: "Frontend Developer",
            company: "Amazon",
            location: "Pune, India",
            salary: "₹15L - ₹25L/year",
            posted: "3 days ago",
            logo: "https://media.licdn.com/dms/image/C560BAQHdAaarsO-eyA/company-logo_100_100/0/1679925159166?e=1709769600&v=beta&t=1KXGJB8Gx4nJ_Ql8aEEYxCwEZWwxHJrZHCN7M-6UOZs",
            easyApply: true
        },
        {
            title: "React Native Developer",
            company: "Swiggy",
            location: "Mumbai, India",
            salary: "₹18L - ₹30L/year",
            posted: "1 week ago",
            logo: "https://media.licdn.com/dms/image/C4D0BAQHR4kplerw3YQ/company-logo_100_100/0/1631350520006?e=1709769600&v=beta&t=0KkKFyx0oPBDvmN7PTYs9J3Jx2LRDC0DKXXDHzHFGQc",
            easyApply: true
        },
        {
            title: "Software Development Engineer",
            company: "Flipkart",
            location: "Bangalore, India",
            salary: "₹20L - ₹40L/year",
            posted: "5 days ago",
            logo: "https://media.licdn.com/dms/image/C560BAQHdAaarsO-eyA/company-logo_100_100/0/1679925159166?e=1709769600&v=beta&t=1KXGJB8Gx4nJ_Ql8aEEYxCwEZWwxHJrZHCN7M-6UOZs"
        }
    ];

    return (
        <div className="jobs-page">
            <div className="jobs-container">
                <div className="jobs-left">
                    <div className="jobs-section">
                        <h2>Recent Job Searches</h2>
                        {recentSearches.map((search, index) => (
                            <div key={index} className="recent-search">
                                <i className="fas fa-search"></i>
                                <span>{search}</span>
                                <i className="fas fa-bell-slash"></i>
                            </div>
                        ))}
                    </div>
                    <div className="jobs-section">
                        <h2>Saved Jobs ({savedJobs.length})</h2>
                        {savedJobs.map((job, index) => (
                            <div key={index} className="saved-job">
                                <img src={job.logo} alt={job.company} />
                                <div className="job-info">
                                    <h3>{job.title}</h3>
                                    <p>{job.company}</p>
                                    <p>{job.location}</p>
                                    <span className="saved-time">{job.posted}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="jobs-main">
                    <div className="jobs-search">
                        <div className="search-bar">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Search jobs" />
                        </div>
                        <div className="search-bar">
                            <i className="fas fa-map-marker-alt"></i>
                            <input type="text" placeholder="Location" />
                        </div>
                        <button className="search-button">Search</button>
                    </div>
                    <div className="recommended-jobs">
                        <h2>Recommended for you</h2>
                        <div className="jobs-grid">
                            {recommendedJobs.map((job, index) => (
                                <div key={index} className="job-card">
                                    <img src={job.logo} alt={job.company} className="company-logo" />
                                    <div className="job-details">
                                        <h3>{job.title}</h3>
                                        <p className="company-name">{job.company}</p>
                                        <p className="job-location">{job.location}</p>
                                        <p className="job-salary">{job.salary}</p>
                                        <p className="job-posted">{job.posted}</p>
                                        {job.easyApply && (
                                            <span className="easy-apply-badge">
                                                <i className="fas fa-bolt"></i> Easy Apply
                                            </span>
                                        )}
                                    </div>
                                    <button className="save-job">
                                        <i className="far fa-bookmark"></i>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="jobs-right">
                    <div className="jobs-section">
                        <h2>Job Seeker Guidance</h2>
                        <p>Recommended based on your activity</p>
                        <div className="guidance-card">
                            <i className="fas fa-chart-line"></i>
                            <div>
                                <h3>Show recruiters you're open</h3>
                                <p>Get more opportunities by advertising to recruiters</p>
                            </div>
                        </div>
                        <div className="guidance-card">
                            <i className="fas fa-bell"></i>
                            <div>
                                <h3>Job alerts activated</h3>
                                <p>Get notified for jobs matching your preferences</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Update NetworkPage component to include invitations
function NetworkPage() {
    const invitations = [
        {
            name: "Raj Malhotra",
            title: "Senior Software Engineer at Amazon",
            mutualConnections: "12",
            image: "https://media.licdn.com/dms/image/D4D03AQGvxQoYVK5v9w/profile-displayphoto-shrink_100_100/0/1709494949443?e=1715212800&v=beta&t=8RRQQQuhQJ-dH7mw9LEQyq9MBEu8h7UeKDHvKMSEGXE",
            time: "1 week ago"
        },
        {
            name: "Sneha Patel",
            title: "Product Designer at Google",
            mutualConnections: "28",
            image: "https://media.licdn.com/dms/image/D4D03AQHKxQoYVK5v9w/profile-displayphoto-shrink_100_100/0/1709494949443?e=1715212800&v=beta&t=8RRQQQuhQJ-dH7mw9LEQyq9MBEu8h7UeKDHvKMSEGXE",
            time: "3 days ago"
        }
    ];

    const suggestedConnections = [
        {
            name: "Priya Sharma",
            title: "Software Engineer at Google",
            mutualConnections: "34",
            image: "https://media.licdn.com/dms/image/D4D03AQGvxQoYVK5v9w/profile-displayphoto-shrink_100_100/0/1709494949443?e=1715212800&v=beta&t=8RRQQQuhQJ-dH7mw9LEQyq9MBEu8h7UeKDHvKMSEGXE"
        },
        {
            name: "Rahul Verma",
            title: "Product Manager at Amazon",
            mutualConnections: "45",
            image: "https://media.licdn.com/dms/image/D4D03AQHKxQoYVK5v9w/profile-displayphoto-shrink_100_100/0/1709494949443?e=1715212800&v=beta&t=8RRQQQuhQJ-dH7mw9LEQyq9MBEu8h7UeKDHvKMSEGXE"
        },
        {
            name: "Aisha Patel",
            title: "Frontend Developer at Microsoft",
            mutualConnections: "28",
            image: "https://media.licdn.com/dms/image/D4D03AQIvxQoYVK5v9w/profile-displayphoto-shrink_100_100/0/1709494949443?e=1715212800&v=beta&t=8RRQQQuhQJ-dH7mw9LEQyq9MBEu8h7UeKDHvKMSEGXE"
        },
        {
            name: "Arjun Kumar",
            title: "Data Scientist at Netflix",
            mutualConnections: "56",
            image: "https://media.licdn.com/dms/image/D4D03AQKvxQoYVK5v9w/profile-displayphoto-shrink_100_100/0/1709494949443?e=1715212800&v=beta&t=8RRQQQuhQJ-dH7mw9LEQyq9MBEu8h7UeKDHvKMSEGXE"
        }
    ];

    return (
        <div className="network-page">
            <div className="network-container">
                <NetworkSidebar />
                <div className="network-main">
                    <div className="network-invitations">
                        <div className="invitations-header">
                            <h2>Invitations ({invitations.length})</h2>
                            <Link to="/mynetwork/invitations" className="see-all">See all</Link>
                        </div>
                        <div className="invitations-list">
                            {invitations.map((invitation, index) => (
                                <InvitationCard key={index} {...invitation} />
                            ))}
                        </div>
                    </div>
                    <div className="network-suggestions">
                        <div className="suggestions-header">
                            <h2>People you may know</h2>
                            <select className="industry-filter">
                                <option>All Industries</option>
                                <option>Technology</option>
                                <option>Finance</option>
                                <option>Healthcare</option>
                            </select>
                        </div>
                        <div className="connections-grid">
                            {suggestedConnections.map((connection, index) => (
                                <ConnectionCard key={index} {...connection} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Main App Component
function App() {
    return (
        <HashRouter basename="/">
            <div className="app">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <div className="app__body">
                            <div className="app__left">
                                <ProfileSection />
                            </div>
                            <div className="app__middle">
                                <Feed />
                            </div>
                            <div className="app__right">
                                <NewsWidget />
                            </div>
                        </div>
                    </Route>
                    <Route path="/mynetwork">
                        <NetworkPage />
                    </Route>
                    <Route path="/jobs">
                        <JobsPage />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    );
}

// Render the App
const rootElement = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootElement
); 