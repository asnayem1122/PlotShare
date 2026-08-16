# PlotShare — Vulnerability Assessment & Security Test (VAPT) Suite
# Automated Security Audit: DOM XSS, Input Sanitization, CSP, and Storage Hardening

import unittest
import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

class TestSecurityAudit(unittest.TestCase):
    """VAPT Security Audit: Vulnerability Assessment & Defensive Review"""

    @classmethod
    def setUpClass(cls):
        with open('d:/Code/PlotShare/index.html', 'r', encoding='utf-8') as f:
            cls.html = f.read()

    def test_dom_xss_sanitization_helper_exists(self):
        """Vulnerability Check: Verify presence of HTML escaping utility"""
        self.assertIn("escapeHTML", self.html, "Missing escapeHTML sanitizer function")

    def test_csp_meta_tag_present(self):
        """Defense Check: Verify Content-Security-Policy (CSP) configuration"""
        self.assertIn("Content-Security-Policy", self.html, "Missing Content Security Policy meta tag")

    def test_chat_messages_sanitized(self):
        """Vulnerability Check: User-generated chat input must be escaped before DOM insertion"""
        self.assertIn("escapeHTML(msg.text", self.html, "Unsanitized user chat message inserted in DOM")

    def test_sri_on_external_scripts(self):
        """Integrity Check: Subresource Integrity (SRI) on Leaflet CDN"""
        self.assertIn("integrity=\"sha256-", self.html, "Leaflet CDN missing Subresource Integrity hash")

    def test_safe_localstorage_parsing(self):
        """Resilience Check: LocalStorage JSON parsing must have fallback safety"""
        self.assertIn("safeJSONParse", self.html, "LocalStorage parsing must be guarded against malformed JSON")

    def test_no_eval_or_document_write(self):
        """Code Quality Check: Disallow dangerous primitives eval() and document.write()"""
        # Ensure eval() is not used
        eval_matches = re.findall(r'\beval\s*\(', self.html)
        self.assertEqual(len(eval_matches), 0, "Dangerous eval() call detected")
        
        # Ensure document.write is not used
        doc_write_matches = re.findall(r'document\.write\s*\(', self.html)
        self.assertEqual(len(doc_write_matches), 0, "Dangerous document.write() call detected")


if __name__ == '__main__':
    print("=" * 60)
    print("🛡️ PLOTSHARE — VULNERABILITY ASSESSMENT & SECURITY AUDIT")
    print("=" * 60)
    suite = unittest.TestSuite()
    loader = unittest.defaultTestLoader
    suite.addTest(loader.loadTestsFromTestCase(TestSecurityAudit))
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)
    if not result.wasSuccessful():
        sys.exit(1)
