async function run() {
  const { create } = await import('ipfs-http-client')
  const ipfs = await create({ host: '127.0.0.1', port: 5001 })

  // we added three attributes, add as many as you want!
  const name = 'Golden Zouzou'
  const metadata = {
    path: '/',
    content: JSON.stringify({
      name,
      attributes: [
        {
          trait_type: 'Zouzou',
          value: 'Golden'
        },
        {
          trait_type: 'Star Wars',
          value: 'Wookie'
        }
      ],
      image: 'https://ipfs.io/ipfs/QmW76rFMJXGTFojnYAH82UknuXsARnFxhSyk8y4WiXUUpK',
      description: 'This is the way'
    })
  }

  const result = await ipfs.add(metadata)
  console.log(result)
  await ipfs.files.cp(`/ipfs/${result.cid}`, '/' + name)

  process.exit(0)
}

run()
