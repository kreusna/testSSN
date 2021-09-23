const StellarSDK = require('stellar-sdk')
const crypto = require('crypto')
/**
 *
 * @param {string} sk
 * @param {string} message
 */
 const generateHashAndSignature = (secretKey, message) => {
  const keyPair = StellarSDK.Keypair.fromSecret(secretKey)
  // Generate sha256 hash
  const hash = crypto.createHash('sha256')
  hash.update(message)
  const sha256Hash = hash.digest('hex')
  const str = Buffer.from(sha256Hash, 'hex')

  // sign signature
  const signature = keyPair.sign(str)

  return {
    public_key: keyPair.publicKey(),
    hash: sha256Hash,
    signature: signature.toString('hex')
  }
}

module.exports = {
  generateHashAndSignature,
}