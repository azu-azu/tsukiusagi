<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '9q6kl+wRgm6f7wzNpbAiHbPAdBToPIMeXBDCViDDuHLsHUr7r6xJ0ulwatW/Xva2nIcvuJRoVaO4uWU/sMqzQQ==');
define('SECURE_AUTH_KEY',  'gmIRxcS2Tnhr61C3MClR5n5v1e58PnVB0RI72BfPKqURbtiY90k7iL8LaMiMFFi1zy/wGA4royBRti59sITMBA==');
define('LOGGED_IN_KEY',    'e652SyuM5wbcHV03Eck+iNuZ5PplT5VEeLDLz6NRQqhkx3iC+KdNk/C0sS1OXJ2ala01k6gYgORyHedUhJTIwg==');
define('NONCE_KEY',        '8p41XRmm+IvPEC45eaetkVEs+iDBjAwTZwcl41Spufw/d5V5O/m9WV4e9uNSNWRIyI1YUd25/LObLsw7/04LfA==');
define('AUTH_SALT',        'UG0t0UbD+eOFqrO6+SO6+wxkg6uhP1sF6WeKL5+oeCvq/g8p0Fu29hmCT0n+ZIJP9EcsXRbRfTkhicHiyq6apQ==');
define('SECURE_AUTH_SALT', 'iBaF9vQbZ0xkvDpL95FJQCCEYR4Mif53FPXGEfD/3lnFITSM6CDVYjQwwp8qupZMGjV56HN22Lq2t/vKctRp0A==');
define('LOGGED_IN_SALT',   'xCeuzCaOVsWrIvIl9zqLqAGD5tjMjTrEYkuqzQoQOvInlWU/a+fTKD/k18UXAUHQ3X6Dqq3+GCbB6G6INr6Feg==');
define('NONCE_SALT',       'eXVi/9uhmPlYOYZXpL3uL0I5Og+SxMfgvFCsGyOTEzz4H+c24+QEHDETTamam8EDNNpa6uyiWxbHVrwZuuaiLA==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
