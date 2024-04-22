import Section from "@/components/docs/section/section";
import Title from "@/components/docs/title/title";
import Paragraph from "@/components/docs/paragraph/paragraph";

export default function Browser() {
    const paragraph1 = `
Firefox is able to parse a URL or a Search Query. If the value passed to the URL bar is a search parameter,
then it will pass that string as an API call to the default search engine (usually Google). Recognizing it as a URL,
 Firefox will typically default to HTTPS first, especially with modern web practices that prioritize security.
If HTTPS fails or the website explicitly does not support it, it may fall back to HTTP.
`

const paragraph2 = `
- Next, Firefox will check it's broswer DNS cache to see if an IP address is already known.
`

const dns2 = `
- If not in Firefox's browser DNS cache, Firefox will then check static DNS records (on a Linux or Mac system, this is the "/etc/hosts" file).
`
const dns3 = `
- Next, Firefox will reach out to the local DNS Resolver (AKA DNS server) configured on the system. If this were happening in your home, the DNS Resolver would be your router.
`

const paragraph3 = `
ARP is a network protocol used to find out the MAC (Media Access Control) address of a device associated with a local route table. 
`
const arp1 = `
- If the IP address for your local DNS resolver (typically provided by your ISP or configured in your network settings) is not in the device's ARP cache, ARP is used.
`
const arp2 = `
- When an ARP request is made, the router will respond with its MAC address. MAC address is how the ARP protocol learns where to send the DNS request. Once the network call from the browser has the MAC address, it can send the DNS request to the router.
When the rotuer receives the DNS request, it will then send the request off to your ISP's DNS resolver (whose IP Address is stored in the routers route table).
`
const paragraph4 = `If the local DNS resolver does not have the answer, it first consults one of the root DNS servers. These servers are the highest-level in the DNS hierarchy.
`
const root1 = `
- The root servers will determine what TLD is being used in the DNS request (e.g. .com, .org, .net, etc.), then respond with the IP address of the TLD server.
`
const paragraph5 = `The TLD server looks up the domain name being referenced, and respond with the names and IP Address of the authoritative DNS servers (E.G ns10.domaincontrol.com, ns11.domaincontrol.com).
`
const paragraph6 = `
The authoritative nameservers have the ability to access a domain's zone file, which contains the IP address of the domain's web server.
`
const auth1 = `
- The authoritative nameserver will then respond with the IP address of the domain's web server.`
const auth2 = `
- The IP Address of the host is typically cached at the local DNS server on the way back. The validity of this record depends on the TTL (Time to Live) value set by the domain's DNS administrator.
`
const paragraph7 = `
With the IP address now known, Firefox can initiate a TCP connection to the server at that address, typically defaulting to HTTPS for security, and load the webpage.
`
const conn1 = `
- Once the browser receives the IP address of the destination server, it takes that and the given port number from the URL (the HTTP protocol defaults to port 80, and HTTPS to port 443), and makes a call to the system library function named socket and requests a TCP socket stream.
`
const conn2 = `
- This request is first passed to the Transport Layer where a TCP segment is crafted. The destination port is added to the header, and a source port is chosen from within the kernel's dynamic port range (ip_local_port_range in Linux).
`
const conn3 = `
- This segment is sent to the Network Layer, which wraps an additional IP header. The IP address of the destination server as well as that of the current machine is inserted to form a packet.
`
const conn4 = `
- The packet next arrives at the Link Layer. A frame header is added that includes the MAC address of the machine's NIC as well as the MAC address of the gateway (local router). As before, if the kernel does not know the MAC address of the gateway, it must broadcast an ARP query to find it.
`
const conn5 = `
- At this point the packet is ready to be transmitted through either: Ethernet, WiFi, Cellular data network
`
    return (
        <>
            <Title heading="What Happens When You Type a Website into your Browser?" />
                <Section number="1" title="URL Parsing & Evaluation" content={paragraph1} />
                <Section number="2" title="DNS Lookup" content={paragraph2} />
                    <Paragraph content={dns2} buffer={true} />
                    <Paragraph content={dns3} buffer={true} />
                <Section number="3" title="ARP Process" content={paragraph3} />
                    <Paragraph content={arp1} buffer={true} />
                    <Paragraph content={arp2} buffer={true} />
                <Section number="4" title="Root Server Analysis" content={paragraph4} />
                    <Paragraph content={root1} buffer={true} />
                <Section number="5" title="TLD Server Analysis" content={paragraph5} />
                <Section number="6" title="Authoritive Server Analysis" content={paragraph6} />
                    <Paragraph content={auth1} buffer={true} />
                    <Paragraph content={auth2} buffer={true} />
                <Section number="7" title="Connection Establishment" content={paragraph7} />
                    <Paragraph content={conn1} buffer={true} />
                    <Paragraph content={conn2} buffer={true} />
                    <Paragraph content={conn3} buffer={true} />
                    <Paragraph content={conn4} buffer={true} />
                    <Paragraph content={conn5} buffer={true} />
                <Paragraph content="" buffer={true} />
                <Paragraph content="" buffer={true} />
                <Paragraph content="" buffer={true} />
                <Paragraph content="" buffer={true} />
        </>
    )
}