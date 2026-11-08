import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { PROJECT_VISUALS } from '../src/data/projectVisuals.ts';
import { SPECIMENS } from '../src/data/portfolioData.ts';

test('every creative case study has a matching original artwork and a destination', () => {
  assert.deepEqual(PROJECT_VISUALS.map(project => project.id), SPECIMENS.map(project => project.id));
  const supportedThemes = new Set(['festival', 'creator', 'community', 'global']);
  for (const project of PROJECT_VISUALS) {
    assert.ok(supportedThemes.has(project.theme), `${project.id}: missing artwork`);
    assert.equal(new URL(project.link).protocol, 'https:');
  }
});

test('the supplied personal portrait is available as a JPEG', async () => {
  const portrait = await readFile(new URL('../public/images/laxmikant.jpg', import.meta.url));
  assert.equal(portrait.readUInt16BE(0), 0xffd8);
});
